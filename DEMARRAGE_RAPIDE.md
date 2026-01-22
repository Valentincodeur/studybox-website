# ⚡ Démarrage Rapide - Déploiement StudyBox

## 🎯 Votre site est prêt à être déployé !

Tout a été préparé automatiquement. Vous pouvez déployer **immédiatement** et ajouter Stripe plus tard.

---

## 📋 Option 1 : Déploiement immédiat (sans Stripe)

**Consultez :** `DEPLOYER_MAINTENANT.md`

Déployez maintenant, ajoutez Stripe quand vous êtes prêt.

---

## 📋 Option 2 : Déploiement complet avec Stripe

### Étape 1 : Obtenez vos clés Stripe LIVE (optionnel)

**Si vous voulez activer les paiements immédiatement :**

1. Allez sur https://dashboard.stripe.com/apikeys
2. **Basculez en mode "Live"** (en haut à gauche)
3. Copiez ces 2 clés :
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (commence par `pk_live_`)
   - `STRIPE_SECRET_KEY` (commence par `sk_live_`)

⚠️ Vous pouvez aussi ajouter ces clés après le déploiement.

---

## 🚀 Étape 2 : Déployez sur Vercel

### Option A : Avec le script automatique (Recommandé)

Ouvrez le terminal dans ce dossier et exécutez :

```bash
./deploy.sh
```

Le script va :
- Installer Vercel CLI automatiquement
- Vous connecter à Vercel
- Déployer votre site

### Option B : Manuellement

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🔑 Étape 3 : Configurez vos clés Stripe

1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet `studybox-website`
3. Allez dans **Settings** > **Environment Variables**
4. Ajoutez vos 2 clés Stripe :

   | Variable | Valeur | Environment |
   |----------|--------|-------------|
   | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` | Production |
   | `STRIPE_SECRET_KEY` | `sk_live_...` | Production |

5. Allez dans **Deployments** > Cliquez sur les 3 points > **Redeploy**

---

## 🌐 Étape 4 : Connectez votre domaine GoDaddy

### Dans Vercel :
1. **Settings** > **Domains**
2. Cliquez sur **Add**
3. Entrez votre domaine (ex: `studybox.com`)

### Dans GoDaddy :
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

4. **Sauvegardez** et attendez 1-2 heures

---

## ✅ C'est terminé !

Votre site sera accessible sur votre domaine GoDaddy après la propagation DNS (1-2h).

En attendant, il est déjà accessible sur : `https://studybox-website.vercel.app`

---

## 📚 Besoin de plus de détails ?

- **Guide complet :** `DEPLOIEMENT_VERCEL.md`
- **Instructions rapides :** `INSTRUCTIONS_DEPLOIEMENT.md`

---

## 🔄 Mises à jour futures

Pour mettre à jour votre site après modifications :

```bash
git add .
git commit -m "Description des changements"
git push
```

Vercel redéploiera automatiquement ! 🎉
