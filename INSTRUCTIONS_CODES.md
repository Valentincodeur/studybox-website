# 📋 Instructions - Système de Codes d'Accès StudyBox

## 🎯 Comment ça fonctionne

### Flux automatique :
1. **Client paie** → Paiement validé
2. **Webhook déclenché** → `/api/webhooks/payment`
3. **Code assigné automatiquement** → Prend un code disponible
4. **Email envoyé** → Client reçoit son code
5. **Code désactivé** → Status passe à "sent" (ne peut plus être utilisé)

---

## 📝 ÉTAPE 1 : Donner vos codes

### Option A : Via l'interface admin (RECOMMANDÉ)

1. Allez sur : `http://localhost:3000/admin/codes`
2. Cliquez sur **"📥 Importer vos codes"**
3. Collez vos codes (un par ligne) :
   ```
   STUDY-A1B2-C3D4-E5F6
   STUDY-X9Y8-Z7W6-V5U4
   STUDY-M5N6-P7Q8-R9S0
   ```
4. Cliquez sur **"Importer"**

### Option B : Générer automatiquement

1. Allez sur : `http://localhost:3000/admin/codes`
2. Entrez le nombre de codes à générer (ex: 100)
3. Cliquez sur **"🎲 Générer des codes"**

---

## 🔧 ÉTAPE 2 : Configurer votre base de données

Vous devez créer une collection/table `access_codes` avec cette structure :

```javascript
{
  id: string,
  code: string,                    // Ex: "STUDY-A1B2-C3D4-E5F6"
  status: string,                  // "available" | "sent" | "expired"
  assigned_to_email: string|null,  // Email du client
  assigned_at: number|null,        // Timestamp d'assignation
  sent_at: number|null,            // Timestamp d'envoi email
  payment_id: string|null,         // ID du paiement
  created_at: number,              // Timestamp de création
  expires_at: number,              // Timestamp d'expiration
  notes: string                    // Notes optionnelles
}
```

### Exemple avec Firebase/Firestore :

Dans `/app/api/codes/assign/route.js`, remplacez les TODO par :

```javascript
import { db } from '@/lib/firebase'

// Trouver un code disponible
const snapshot = await db.collection('access_codes')
  .where('status', '==', 'available')
  .where('assigned_to_email', '==', null)
  .limit(1)
  .get()

if (snapshot.empty) {
  return NextResponse.json({ error: 'Aucun code disponible' }, { status: 400 })
}

const availableCode = {
  id: snapshot.docs[0].id,
  ...snapshot.docs[0].data()
}

// Marquer comme envoyé
await db.collection('access_codes').doc(availableCode.id).update({
  status: 'sent',
  assigned_to_email: email,
  assigned_at: Date.now(),
  sent_at: Date.now(),
  payment_id: paymentId
})
```

---

## 📧 ÉTAPE 3 : Configurer l'envoi d'emails

### Avec Resend (RECOMMANDÉ) :

1. Créez un compte sur [resend.com](https://resend.com)
2. Obtenez votre API key
3. Installez : `npm install resend`
4. Ajoutez dans `.env.local` :
   ```
   RESEND_API_KEY=re_votre_cle_api
   ```

5. Dans `/app/api/codes/assign/route.js`, remplacez la fonction `sendCodeEmail` :

```javascript
import { Resend } from 'resend'

async function sendCodeEmail(email, code) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  const { data, error } = await resend.emails.send({
    from: 'StudyBox <noreply@studybox.com>',
    to: email,
    subject: '🎉 Votre code d\'accès StudyBox',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; }
          .code { font-size: 28px; font-weight: bold; color: #0ea5e9; }
        </style>
      </head>
      <body>
        <h1>🎉 Bienvenue sur StudyBox !</h1>
        <p>Votre code d'accès : <span class="code">${code}</span></p>
      </body>
      </html>
    `
  })
  
  if (error) {
    console.error('Erreur email:', error)
    return false
  }
  
  return true
}
```

---

## 💳 ÉTAPE 4 : Configurer le webhook de paiement

### Avec Stripe :

1. Dans votre dashboard Stripe → Webhooks
2. Ajoutez l'URL : `https://votre-site.com/api/webhooks/payment`
3. Sélectionnez l'événement : `payment_intent.succeeded`
4. Copiez le secret du webhook
5. Ajoutez dans `.env.local` :
   ```
   STRIPE_WEBHOOK_SECRET=whsec_votre_secret
   NEXT_PUBLIC_URL=https://votre-site.com
   ```

6. Dans `/app/api/webhooks/payment/route.js`, décommentez :

```javascript
import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  const sig = request.headers.get('stripe-signature')
  const body = await request.text()
  
  let event
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    )
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 400 })
  }
  
  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object
    const email = paymentIntent.receipt_email
    
    // Assigner le code
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/codes/assign`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email, 
        paymentId: paymentIntent.id 
      })
    })
  }
  
  return NextResponse.json({ received: true })
}
```

---

## 🧪 ÉTAPE 5 : Tester le système

### Test manuel :

```bash
curl -X POST http://localhost:3000/api/webhooks/payment \
  -H "Content-Type: application/json" \
  -d '{
    "status": "succeeded",
    "customer_email": "test@example.com",
    "id": "pay_test_123"
  }'
```

Vérifiez :
1. ✅ Email reçu
2. ✅ Code désactivé dans `/admin/codes`
3. ✅ Status = "sent"

---

## 📊 Gérer vos codes

### Interface admin : `/admin/codes`

**Fonctionnalités :**
- 📊 Statistiques en temps réel
- 🎲 Générer des codes automatiquement
- 📥 Importer vos propres codes
- 📤 Exporter en CSV
- 🔍 Rechercher par code ou email
- 🎯 Filtrer par status

---

## ⚠️ Points importants

1. **Le code est désactivé DÈS l'envoi de l'email** (pas besoin d'attendre l'activation)
2. **Un code = Un email** (impossible de réutiliser)
3. **L'email utilisé pour le paiement** reçoit automatiquement le code
4. **Vous pouvez importer vos propres codes** via l'admin
5. **Tout est tracé** : qui, quand, quel paiement

---

## 🚀 Déploiement

1. Configurez votre base de données (Firebase/MongoDB/etc.)
2. Configurez votre service d'email (Resend/SendGrid/etc.)
3. Configurez le webhook de paiement (Stripe/PayPal/etc.)
4. Importez vos codes via `/admin/codes`
5. Testez avec un paiement réel

---

## 📞 Support

Si vous avez des questions, vérifiez :
- Les logs dans la console
- La page `/admin/codes` pour voir l'état des codes
- Les emails envoyés

**Bon courage ! 🎉**
