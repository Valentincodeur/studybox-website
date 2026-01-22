# 🎯 Instructions Rapides de Déploiement

## 🚀 Méthode Rapide (Recommandée)

### 1️⃣ Préparez vos clés Stripe LIVE

Avant de commencer, obtenez vos clés de production :
- Allez sur https://dashboard.stripe.com/apikeys
- Basculez en mode **"Live"** (pas Test)
- Copiez :
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (commence par `pk_live_`)
  - `STRIPE_SECRET_KEY` (commence par `sk_live_`)

### 2️⃣ Déployez en une commande

Ouvrez le terminal dans ce dossier et exécutez :

```bash
./deploy.sh
```

Ce script va :
- ✅ Installer Vercel CLI si nécessaire
- ✅ Vous connecter à Vercel
- ✅ Déployer votre site automatiquement

### 3️⃣ Configurez les variables d'environnement

1. Allez sur https://vercel.com/dashboard
2. Sélectionnez votre projet `studybox-website`
3. Allez dans **Settings > Environment Variables**
4. Ajoutez vos 2 clés Stripe (mode Production)
5. Cliquez sur **Redeploy** dans l'onglet Deployments

### 4️⃣ Connectez votre domaine GoDaddy

#### Dans Vercel :
1. Settings > Domains
2. Ajoutez votre domaine (ex: `studybox.com`)

#### Dans GoDaddy :
1. Connectez-vous sur https://godaddy.com
2. Mes produits > Domaines > Votre domaine > Gérer DNS
3. Ajoutez ces enregistrements :

**Enregistrement A :**
- Type : `A`
- Nom : `@`
- Valeur : `76.76.21.21`

**Enregistrement CNAME :**
- Type : `CNAME`
- Nom : `www`
- Valeur : `cname.vercel-dns.com`

4. Sauvegardez et attendez 1-2 heures

---

## 📚 Documentation Complète

Pour plus de détails, consultez : **`DEPLOIEMENT_VERCEL.md`**

---

## ✅ Checklist

- [ ] Clés Stripe LIVE obtenues
- [ ] Script `./deploy.sh` exécuté
- [ ] Variables d'environnement configurées dans Vercel
- [ ] Site redéployé après ajout des variables
- [ ] Domaine ajouté dans Vercel
- [ ] DNS configurés dans GoDaddy
- [ ] Site accessible sur votre domaine (après propagation DNS)

---

## 🆘 Besoin d'aide ?

Consultez la section "Dépannage" dans `DEPLOIEMENT_VERCEL.md`
