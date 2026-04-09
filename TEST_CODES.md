# 🧪 Test du système de codes

## ✅ Système prêt !

Vos **136 codes** sont chargés et prêts à être utilisés automatiquement.

---

## 🚀 Test rapide

### 1. Démarrer le serveur
```bash
npm run dev
```

### 2. Voir les statistiques
Ouvrez votre navigateur : `http://localhost:3000/api/codes/stats`

Vous verrez :
```json
{
  "total": 136,
  "available": 136,
  "used": 0,
  "percentage_used": 0,
  "last_codes_used": []
}
```

### 3. Simuler un paiement (test manuel)
```bash
curl -X POST http://localhost:3000/api/codes/assign \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "paymentId": "pay_test_123"
  }'
```

**Résultat attendu :**
```json
{
  "success": true,
  "code": "STDB-4821-7395-1048",
  "remaining": 135,
  "message": "Code envoyé par email et désactivé avec succès"
}
```

### 4. Vérifier que le code est désactivé
Rechargez : `http://localhost:3000/api/codes/stats`

```json
{
  "total": 136,
  "available": 135,  ← Un de moins !
  "used": 1,
  "percentage_used": 1,
  "last_codes_used": [
    {
      "code": "STDB-4821-7395-1048",
      "email": "test@example.com",
      "sent_at": "2026-04-09T08:37:00.000Z"
    }
  ]
}
```

---

## 📧 Configuration email (optionnel pour test)

Pour l'instant, l'email est simulé (console.log).

Pour envoyer de vrais emails, configurez **Resend** :

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
    html: emailHTML
  })
  
  if (error) {
    console.error('Erreur email:', error)
    return false
  }
  
  console.log('✅ Email envoyé à', email)
  return true
}
```

---

## 🔗 Webhook de paiement

### Avec Stripe

Quand un paiement est validé, Stripe appelle automatiquement :
`https://votre-site.com/api/webhooks/payment`

Le webhook :
1. Récupère l'email du client
2. Appelle `/api/codes/assign`
3. Un code est envoyé et désactivé automatiquement

**Configuration Stripe :**
1. Dashboard Stripe → Webhooks
2. URL : `https://votre-site.com/api/webhooks/payment`
3. Événement : `payment_intent.succeeded`

---

## 📊 Fichier JSON mis à jour automatiquement

Après chaque code envoyé, le fichier `/data/codes-studybox.json` est mis à jour :

**Avant :**
```json
{
  "codes": [
    "STDB-4821-7395-1048",
    "STDB-5930-1847-6621",
    ...
  ]
}
```

**Après :**
```json
{
  "codes": [
    {
      "code": "STDB-4821-7395-1048",
      "status": "sent",
      "assigned_to_email": "test@example.com",
      "assigned_at": "2026-04-09T08:37:00.000Z",
      "sent_at": "2026-04-09T08:37:00.000Z",
      "payment_id": "pay_test_123"
    },
    "STDB-5930-1847-6621",
    ...
  ]
}
```

---

## ✅ Checklist

- [x] 136 codes chargés
- [x] API `/api/codes/assign` fonctionnelle
- [x] API `/api/codes/stats` pour suivre
- [x] Webhook `/api/webhooks/payment` prêt
- [x] Codes désactivés automatiquement après envoi
- [ ] Configurer service email (Resend)
- [ ] Configurer webhook Stripe
- [ ] Tester avec un vrai paiement

---

**Tout est prêt ! 🎉**
