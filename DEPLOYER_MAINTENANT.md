# 🚀 Déployer StudyBox MAINTENANT

## ✅ Votre site est prêt à être déployé immédiatement !

Le build fonctionne sans les clés Stripe. Vous pourrez les ajouter **après** le déploiement.

---

## 📋 Déploiement en 3 étapes

### 1️⃣ Déployez sur Vercel

Ouvrez le terminal dans ce dossier et exécutez :

```bash
./deploy.sh
```

**Ou manuellement :**
```bash
npm install -g vercel
vercel login
vercel --prod
```

✅ Votre site sera en ligne sur : `https://studybox-website.vercel.app`

---

### 2️⃣ Connectez votre domaine GoDaddy

#### Dans Vercel :
1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet `studybox-website`
3. **Settings** > **Domains**
4. Cliquez sur **Add** et entrez votre domaine (ex: `studybox.com`)

#### Dans GoDaddy :
1. Connectez-vous sur https://godaddy.com
2. **Mes produits** > **Domaines** > Votre domaine > **Gérer DNS**
3. Ajoutez ces 2 enregistrements :

   **Enregistrement A :**
   - Type : `A`
   - Nom : `@`
   - Valeur : `76.76.21.21`
   - TTL : 600

   **Enregistrement CNAME :**
   - Type : `CNAME`
   - Nom : `www`
   - Valeur : `cname.vercel-dns.com`
   - TTL : 600

4. **Sauvegardez** et attendez 1-2 heures pour la propagation DNS

---

### 3️⃣ Ajoutez Stripe (plus tard)

**Quand vous serez prêt à activer les paiements :**

1. Obtenez vos clés Stripe LIVE :
   - https://dashboard.stripe.com/apikeys
   - Mode **"Live"** (pas Test)
   - Copiez `pk_live_...` et `sk_live_...`

2. Dans Vercel Dashboard :
   - **Settings** > **Environment Variables**
   - Ajoutez :
     - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_live_...`
     - `STRIPE_SECRET_KEY` = `sk_live_...`
   - Environment : **Production**

3. Redéployez :
   - **Deployments** > 3 points > **Redeploy**

---

## ✅ C'est tout !

Votre site StudyBox sera en ligne sur votre domaine GoDaddy dans 1-2 heures.

**En attendant**, il est déjà accessible sur Vercel : `https://studybox-website.vercel.app`

---

## 📝 Note importante

Le bouton de paiement affichera un message "Stripe n'est pas encore configuré" jusqu'à ce que vous ajoutiez vos clés à l'étape 3.

Le reste du site fonctionne parfaitement ! 🎉
