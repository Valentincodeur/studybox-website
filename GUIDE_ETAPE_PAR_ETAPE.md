# 📖 Guide Étape par Étape - Déploiement StudyBox

## 🎯 Je vais vous guider pas à pas pour déployer votre site

Suivez chaque étape dans l'ordre. Ne passez pas à l'étape suivante tant que la précédente n'est pas terminée.

---

## ✅ ÉTAPE 1 : Vérifier que tout est prêt

### 1.1 Ouvrir le Terminal
- Sur Mac : Appuyez sur `Cmd + Espace`
- Tapez "Terminal" et appuyez sur Entrée
- Ou utilisez le terminal intégré dans VS Code (en bas de l'écran)

### 1.2 Aller dans le dossier du projet
Copiez-collez cette commande dans le terminal :

```bash
cd "/Users/valentinvanhove/Documents/StudyBox/Site Web/V1 StudyBox Site"
```

Appuyez sur **Entrée**

### 1.3 Vérifier que vous êtes au bon endroit
Tapez :

```bash
ls
```

Vous devriez voir apparaître : `package.json`, `app/`, `components/`, etc.

✅ **Si vous voyez ces fichiers, passez à l'étape 2**

---

## 🔧 ÉTAPE 2 : Installer Vercel CLI

### 2.1 Installer Vercel globalement
Copiez-collez cette commande :

```bash
npm install -g vercel
```

Appuyez sur **Entrée** et attendez que l'installation se termine (peut prendre 1-2 minutes).

### 2.2 Vérifier l'installation
Tapez :

```bash
```

Vous devriez voir un numéro de version (ex: `33.0.1`)

✅ **Si vous voyez une version, passez à l'étape 3**

---

## 🔑 ÉTAPE 3 : Se connecter à Vercel

### 3.1 Créer un compte Vercel (si vous n'en avez pas)
1. Ouvrez votre navigateur
2. Allez sur **https://vercel.com**
3. Cliquez sur **"Sign Up"** (en haut à droite)
4. Choisissez une méthode d'inscription :
   - **GitHub** (recommandé)
   - **GitLab**
   - **Email**
5. Suivez les instructions pour créer votre compte
6. **Gardez cette page ouverte**

### 3.2 Se connecter via le Terminal
Retournez dans le terminal et tapez :

```bash
vercel login
```

Appuyez sur **Entrée**

### 3.3 Choisir votre méthode de connexion
Le terminal va vous demander comment vous voulez vous connecter :

```
? Log in to Vercel
  Continue with GitHub
  Continue with GitLab
  Continue with Email
```

Utilisez les **flèches ↑ ↓** pour sélectionner votre méthode, puis appuyez sur **Entrée**

### 3.4 Confirmer dans le navigateur
- Une page va s'ouvrir dans votre navigateur
- Cliquez sur **"Confirm"** ou **"Authorize"**
- Retournez dans le terminal

Vous devriez voir : `> Success! Email verified`

✅ **Si vous voyez "Success", passez à l'étape 4**

---

## 🚀 ÉTAPE 4 : Déployer votre site

### 4.1 Lancer le déploiement
Dans le terminal, tapez :

```bash
vercel
```

Appuyez sur **Entrée**

### 4.2 Répondre aux questions

Vercel va vous poser plusieurs questions. Voici comment répondre :

#### Question 1 : Set up and deploy?
```
? Set up and deploy "~/Documents/StudyBox/Site Web/V1 StudyBox Site"? [Y/n]
```
→ Tapez **Y** et appuyez sur **Entrée**

#### Question 2 : Which scope?
```
? Which scope do you want to deploy to?
```
→ Sélectionnez **votre nom d'utilisateur** avec les flèches, puis **Entrée**

#### Question 3 : Link to existing project?
```
? Link to existing project? [y/N]
```
→ Tapez **N** et appuyez sur **Entrée** (c'est un nouveau projet)

#### Question 4 : What's your project's name?
```
? What's your project's name? (v1-studybox-site)
```
→ Tapez **studybox-website** et appuyez sur **Entrée**

#### Question 5 : In which directory is your code located?
```
? In which directory is your code located? ./
```
→ Appuyez juste sur **Entrée** (laissez `./`)

### 4.3 Attendre le déploiement
Vercel va maintenant :
1. ✅ Uploader vos fichiers
2. ✅ Installer les dépendances
3. ✅ Builder votre site
4. ✅ Déployer

**Cela peut prendre 2-5 minutes. Soyez patient !**

### 4.4 Récupérer l'URL
À la fin, vous verrez quelque chose comme :

```
✅ Production: https://studybox-website.vercel.app [2m]
```

🎉 **Votre site est en ligne !**

Copiez cette URL et ouvrez-la dans votre navigateur pour voir votre site.

✅ **Si votre site s'affiche, passez à l'étape 5**

---

## 🌐 ÉTAPE 5 : Connecter votre domaine GoDaddy

### 5.1 Ajouter le domaine dans Vercel

#### Via le navigateur (plus facile) :
1. Allez sur **https://vercel.com/dashboard**
2. Cliquez sur votre projet **studybox-website**
3. Cliquez sur l'onglet **"Settings"** (en haut)
4. Dans le menu de gauche, cliquez sur **"Domains"**
5. Cliquez sur le bouton **"Add"**
6. Entrez votre domaine (ex: `studybox.com`)
7. Cliquez sur **"Add"**

Vercel va vous montrer les enregistrements DNS à configurer.

**⚠️ NE FERMEZ PAS CETTE PAGE - vous en aurez besoin pour l'étape suivante**

---

## 🔧 ÉTAPE 6 : Configurer les DNS dans GoDaddy

### 6.1 Se connecter à GoDaddy
1. Ouvrez un nouvel onglet
2. Allez sur **https://godaddy.com**
3. Cliquez sur **"Se connecter"** (en haut à droite)
4. Entrez vos identifiants

### 6.2 Accéder à la gestion DNS
1. Cliquez sur votre **nom d'utilisateur** (en haut à droite)
2. Cliquez sur **"Mes produits"**
3. Trouvez votre domaine dans la liste
4. Cliquez sur le bouton **"DNS"** ou **"Gérer DNS"** à côté de votre domaine

### 6.3 Configurer l'enregistrement A

#### Supprimer l'ancien enregistrement A (si existe) :
1. Cherchez un enregistrement de type **"A"** avec le nom **"@"**
2. Cliquez sur l'icône **crayon** ou **modifier**
3. Cliquez sur **"Supprimer"** ou la **poubelle**
4. Confirmez la suppression

#### Ajouter le nouvel enregistrement A :
1. Cliquez sur **"Ajouter"** ou **"Add"**
2. Sélectionnez le type : **A**
3. Remplissez :
   - **Nom** : `@`
   - **Valeur** ou **Pointe vers** : `76.76.21.21`
   - **TTL** : `600` (ou laissez par défaut)
4. Cliquez sur **"Enregistrer"** ou **"Save"**

### 6.4 Configurer l'enregistrement CNAME

#### Supprimer l'ancien enregistrement CNAME www (si existe) :
1. Cherchez un enregistrement de type **"CNAME"** avec le nom **"www"**
2. Cliquez sur l'icône **crayon** ou **modifier**
3. Cliquez sur **"Supprimer"** ou la **poubelle**
4. Confirmez la suppression

#### Ajouter le nouvel enregistrement CNAME :
1. Cliquez sur **"Ajouter"** ou **"Add"**
2. Sélectionnez le type : **CNAME**
3. Remplissez :
   - **Nom** : `www`
   - **Valeur** ou **Pointe vers** : `cname.vercel-dns.com`
   - **TTL** : `600` (ou laissez par défaut)
4. Cliquez sur **"Enregistrer"** ou **"Save"**

### 6.5 Vérifier vos modifications
Vous devriez maintenant voir dans la liste :
- ✅ Un enregistrement **A** : `@` → `76.76.21.21`
- ✅ Un enregistrement **CNAME** : `www` → `cname.vercel-dns.com`

✅ **Si c'est bon, passez à l'étape 7**

---

## ⏱️ ÉTAPE 7 : Attendre la propagation DNS

### 7.1 Comprendre la propagation
Les modifications DNS peuvent prendre du temps à se propager sur Internet :
- **Minimum** : 5-10 minutes
- **Moyen** : 1-2 heures
- **Maximum** : 24-48 heures

### 7.2 Vérifier la propagation
Retournez sur Vercel :
1. Allez dans **Settings > Domains**
2. Regardez le statut de votre domaine

Vous verrez :
- ⏳ **"Pending"** ou **"Invalid Configuration"** → Attendez encore
- ✅ **"Valid Configuration"** avec une coche verte → C'est bon !

### 7.3 Tester votre domaine
Une fois que Vercel affiche ✅, ouvrez votre navigateur et allez sur :
- `https://votredomaine.com`
- `https://www.votredomaine.com`

🎉 **Votre site StudyBox est maintenant en ligne sur votre domaine GoDaddy !**

---

## 🔐 ÉTAPE 8 (Optionnelle) : Ajouter Stripe plus tard

**Quand vous serez prêt à activer les paiements :**

### 8.1 Obtenir vos clés Stripe LIVE
1. Allez sur **https://dashboard.stripe.com/apikeys**
2. Basculez en mode **"Live"** (en haut à gauche, pas "Test")
3. Copiez vos 2 clés :
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (commence par `pk_live_`)
   - `STRIPE_SECRET_KEY` (commence par `sk_live_`)

### 8.2 Ajouter les clés dans Vercel
1. Allez sur **https://vercel.com/dashboard**
2. Cliquez sur votre projet **studybox-website**
3. Allez dans **Settings > Environment Variables**
4. Cliquez sur **"Add New"**

**Première variable :**
- **Name** : `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- **Value** : Collez votre clé `pk_live_...`
- **Environment** : Cochez **Production**
- Cliquez sur **"Save"**

**Deuxième variable :**
- **Name** : `STRIPE_SECRET_KEY`
- **Value** : Collez votre clé `sk_live_...`
- **Environment** : Cochez **Production**
- Cliquez sur **"Save"**

### 8.3 Redéployer
1. Allez dans l'onglet **"Deployments"**
2. Trouvez le dernier déploiement (en haut)
3. Cliquez sur les **3 points** à droite
4. Cliquez sur **"Redeploy"**
5. Confirmez

Attendez 2-3 minutes que le redéploiement se termine.

✅ **Les paiements Stripe sont maintenant actifs !**

---

## 🎉 FÉLICITATIONS !

Votre site StudyBox est maintenant :
- ✅ Déployé sur Vercel
- ✅ Accessible sur votre domaine GoDaddy
- ✅ Sécurisé avec HTTPS
- ✅ Prêt à recevoir des visiteurs

---

## 🔄 Mettre à jour votre site plus tard

Quand vous modifiez votre site, pour le mettre à jour :

```bash
cd "/Users/valentinvanhove/Documents/StudyBox/Site Web/V1 StudyBox Site"
git add .
git commit -m "Description de vos modifications"
vercel --prod
```

Vercel redéploiera automatiquement ! 🚀

---

## 🆘 Problèmes ?

### Le build échoue
- Vérifiez que vous êtes dans le bon dossier
- Essayez : `npm install` puis `vercel` à nouveau

### Le domaine ne fonctionne pas
- Attendez 1-2 heures pour la propagation DNS
- Vérifiez les enregistrements DNS dans GoDaddy
- Utilisez https://dnschecker.org pour vérifier

### Vercel demande un paiement
- Le plan gratuit suffit pour votre site
- Ne cliquez pas sur "Upgrade"

---

## 📞 Besoin d'aide ?

- **Vercel** : https://vercel.com/support
- **GoDaddy** : https://www.godaddy.com/help
- **Stripe** : https://support.stripe.com
