# 🚀 Guide de Déploiement StudyBox sur Vercel + GoDaddy

## 📦 Étape 1 : Préparer le projet

### ✅ Fichiers créés automatiquement :
- `vercel.json` - Configuration Vercel
- `.env.production.example` - Template des variables d'environnement

### ⚠️ Important avant de déployer :
Vos clés Stripe de **PRODUCTION** (mode Live) sont nécessaires :
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (commence par `pk_live_`)
- `STRIPE_SECRET_KEY` (commence par `sk_live_`)

**Comment obtenir vos clés Live :**
1. Allez sur https://dashboard.stripe.com/apikeys
2. Basculez en mode **"Live"** (en haut à gauche)
3. Copiez vos clés de production

---

## 🌐 Étape 2 : Déployer sur Vercel

### A. Créer un compte Vercel

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"**
3. Inscrivez-vous avec GitHub, GitLab ou email (gratuit)

### B. Déployer le projet

#### Option A : Déploiement via GitHub (Recommandé)

1. **Créer un repository GitHub :**
   ```bash
   cd "/Users/valentinvanhove/Documents/StudyBox/Site Web/V1 StudyBox Site"
   git init
   git add .
   git commit -m "Initial commit - StudyBox website"
   ```

2. **Créer un repo sur GitHub.com :**
   - Allez sur https://github.com/new
   - Nom : `studybox-website`
   - Visibilité : Private
   - Ne cochez rien d'autre
   - Cliquez sur "Create repository"

3. **Pousser le code :**
   ```bash
   git remote add origin https://github.com/VOTRE_USERNAME/studybox-website.git
   git branch -M main
   git push -u origin main
   ```

4. **Dans Vercel :**
   - Cliquez sur **"Add New Project"**
   - Cliquez sur **"Import Git Repository"**
   - Sélectionnez votre repository `studybox-website`
   - Cliquez sur **"Import"**

#### Option B : Déploiement direct (Alternative)

1. **Installer Vercel CLI :**
   ```bash
   npm install -g vercel
   ```

2. **Se connecter :**
   ```bash
   vercel login
   ```

3. **Déployer :**
   ```bash
   cd "/Users/valentinvanhove/Documents/StudyBox/Site Web/V1 StudyBox Site"
   vercel
   ```

4. Suivez les instructions :
   - Set up and deploy? **Y**
   - Which scope? Sélectionnez votre compte
   - Link to existing project? **N**
   - Project name? `studybox-website`
   - Directory? `.` (appuyez sur Entrée)
   - Override settings? **N**

### C. Configurer les variables d'environnement

1. **Dans Vercel Dashboard :**
   - Allez sur votre projet
   - Cliquez sur **"Settings"**
   - Cliquez sur **"Environment Variables"**

2. **Ajoutez les variables :**

   | Name | Value | Environment |
   |------|-------|-------------|
   | `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | `pk_live_...` | Production |
   | `STRIPE_SECRET_KEY` | `sk_live_...` | Production |

   ⚠️ **Important :** Utilisez vos clés **LIVE** (pas TEST)

3. **Redéployer :**
   - Allez dans l'onglet **"Deployments"**
   - Cliquez sur les 3 points du dernier déploiement
   - Cliquez sur **"Redeploy"**

### D. Vérifier le déploiement

Votre site sera accessible sur : `https://studybox-website.vercel.app`

Testez :
- ✅ Page d'accueil
- ✅ Navigation
- ✅ Page /commander
- ✅ Bouton de paiement Stripe

---

## 🌍 Étape 3 : Connecter votre domaine GoDaddy

### A. Dans Vercel

1. **Ajouter le domaine :**
   - Dans votre projet Vercel
   - Allez dans **"Settings" > "Domains"**
   - Cliquez sur **"Add"**
   - Entrez votre domaine (ex: `studybox.com`)
   - Cliquez sur **"Add"**

2. **Vercel vous donnera les enregistrements DNS à configurer**

### B. Dans GoDaddy

1. **Accéder aux DNS :**
   - Connectez-vous sur https://godaddy.com
   - Allez dans **"Mes produits"**
   - Cliquez sur **"Domaines"**
   - Cliquez sur votre domaine
   - Cliquez sur **"Gérer DNS"** ou **"DNS"**

2. **Configurer les enregistrements DNS :**

   #### Pour le domaine principal (studybox.com) :
   
   **Supprimer les anciens enregistrements A :**
   - Supprimez tous les enregistrements A existants avec le nom `@`
   
   **Ajouter le nouvel enregistrement A :**
   - Type : `A`
   - Nom : `@`
   - Valeur : `76.76.21.21`
   - TTL : `600` secondes (ou par défaut)
   
   #### Pour www (www.studybox.com) :
   
   **Supprimer les anciens enregistrements CNAME :**
   - Supprimez tous les enregistrements CNAME existants avec le nom `www`
   
   **Ajouter le nouvel enregistrement CNAME :**
   - Type : `CNAME`
   - Nom : `www`
   - Valeur : `cname.vercel-dns.com`
   - TTL : `600` secondes (ou par défaut)

3. **Sauvegarder les modifications**

### C. Attendre la propagation DNS

- **Délai :** 5 minutes à 48 heures (généralement 1-2 heures)
- **Vérifier :** Allez dans Vercel > Settings > Domains
- **Status :** Doit afficher "Valid Configuration" avec une coche verte

### D. Vérifier le certificat SSL

- Vercel génère automatiquement un certificat SSL gratuit
- Votre site sera accessible en HTTPS
- Vérifiez : `https://votredomaine.com`

---

## ✅ Checklist finale

Avant de mettre en ligne :

- [ ] Clés Stripe LIVE configurées dans Vercel
- [ ] Site déployé et accessible sur Vercel
- [ ] Test du paiement Stripe en mode Live
- [ ] DNS configurés dans GoDaddy
- [ ] Domaine validé dans Vercel (coche verte)
- [ ] HTTPS actif (cadenas dans le navigateur)
- [ ] Test complet du site sur le domaine final

---

## 🔧 Mises à jour futures

### Avec GitHub (Option A) :
```bash
# Faire vos modifications
git add .
git commit -m "Description des changements"
git push
```
→ Vercel déploie automatiquement !

### Avec Vercel CLI (Option B) :
```bash
cd "/Users/valentinvanhove/Documents/StudyBox/Site Web/V1 StudyBox Site"
vercel --prod
```

---

## 🆘 Dépannage

### Le build échoue sur Vercel
- Vérifiez que les variables d'environnement sont bien configurées
- Vérifiez les logs dans Vercel Dashboard > Deployments

### Le domaine ne fonctionne pas
- Attendez 1-2 heures pour la propagation DNS
- Vérifiez les enregistrements DNS dans GoDaddy
- Utilisez https://dnschecker.org pour vérifier la propagation

### Erreur Stripe
- Vérifiez que vous utilisez les clés LIVE (pas TEST)
- Vérifiez que votre compte Stripe est activé

---

## 📞 Support

- **Vercel :** https://vercel.com/support
- **Stripe :** https://support.stripe.com
- **GoDaddy :** https://www.godaddy.com/help

---

## 🎉 Félicitations !

Votre site StudyBox est maintenant en ligne sur votre domaine GoDaddy ! 🚀
