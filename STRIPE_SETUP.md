# Configuration Stripe pour StudyBox

## 📋 Prérequis

1. Compte Stripe (gratuit) : https://stripe.com
2. Node.js et npm installés
3. Projet Next.js configuré

## 🔧 Installation

Les packages Stripe sont déjà installés :
- `@stripe/stripe-js` - Client Stripe pour le frontend
- `@stripe/react-stripe-js` - Composants React pour Stripe
- `stripe` - SDK Stripe pour le backend

## 🔑 Configuration des clés API

### 1. Obtenir vos clés Stripe

1. Connectez-vous à votre compte Stripe
2. Allez dans **Développeurs** > **Clés API**
3. Vous verrez deux clés :
   - **Clé publique** (commence par `pk_test_` en mode test)
   - **Clé secrète** (commence par `sk_test_` en mode test)

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
# Clé publique Stripe (visible côté client)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique

# Clé secrète Stripe (JAMAIS exposée côté client)
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete
```

⚠️ **IMPORTANT** : Ne commitez JAMAIS le fichier `.env.local` dans Git !

### 3. Redémarrer le serveur

```bash
npm run dev
```

## 🏗️ Architecture

### Fichiers créés

1. **`/app/api/create-payment-intent/route.js`**
   - API route Next.js pour créer un Payment Intent
   - Communique avec Stripe côté serveur
   - Sécurisé avec la clé secrète

2. **`/components/StripePaymentForm.jsx`**
   - Composant React pour le formulaire de paiement
   - Utilise `PaymentElement` de Stripe
   - Gère la confirmation du paiement

3. **`/app/commander/page.js`** (modifié)
   - Intégration du composant Stripe
   - Gestion du flux de paiement
   - Création du Payment Intent à l'étape 3

## 💳 Méthodes de paiement supportées

- ✅ Cartes bancaires (Visa, Mastercard, American Express)
- ✅ Bancontact (Belgique)
- ✅ iDEAL (Pays-Bas)
- ✅ Autres méthodes configurables dans Stripe Dashboard

## 🧪 Tests

### Cartes de test Stripe

Pour tester les paiements en mode test :

| Carte | Numéro | Résultat |
|-------|--------|----------|
| Succès | 4242 4242 4242 4242 | Paiement réussi |
| Refusé | 4000 0000 0000 0002 | Carte refusée |
| 3D Secure | 4000 0027 6000 3184 | Authentification requise |

- **Date d'expiration** : N'importe quelle date future
- **CVC** : N'importe quel code à 3 chiffres
- **Code postal** : N'importe quel code postal valide

### Bancontact de test

Pour tester Bancontact, utilisez les identifiants de test fournis par Stripe.

## 🔒 Sécurité

✅ **Bonnes pratiques implémentées** :

1. Clé secrète uniquement côté serveur
2. Payment Intent créé côté serveur
3. Validation des montants côté serveur
4. Cryptage SSL automatique avec Stripe
5. PCI DSS compliance automatique

## 📊 Suivi des paiements

1. Connectez-vous à votre Dashboard Stripe
2. Allez dans **Paiements** pour voir toutes les transactions
3. Consultez les détails de chaque paiement
4. Gérez les remboursements si nécessaire

## 🚀 Passage en production

### 1. Activer votre compte Stripe

1. Complétez les informations de votre entreprise
2. Ajoutez vos informations bancaires
3. Activez votre compte

### 2. Utiliser les clés de production

Remplacez dans `.env.local` :

```bash
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_votre_cle_publique_production
STRIPE_SECRET_KEY=sk_live_votre_cle_secrete_production
```

### 3. Tester en production

Effectuez quelques transactions de test avec de vraies cartes (petits montants) avant le lancement officiel.

## 🆘 Dépannage

### Erreur : "Stripe is not defined"

- Vérifiez que la clé publique est bien dans `.env.local`
- Redémarrez le serveur de développement

### Erreur : "Invalid API Key"

- Vérifiez que vous utilisez les bonnes clés (test vs production)
- Assurez-vous qu'il n'y a pas d'espaces dans les clés

### Le paiement ne se charge pas

- Ouvrez la console du navigateur pour voir les erreurs
- Vérifiez que l'API route `/api/create-payment-intent` fonctionne
- Vérifiez les logs Stripe Dashboard

## 📚 Documentation

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe React](https://stripe.com/docs/stripe-js/react)
- [Payment Intents](https://stripe.com/docs/payments/payment-intents)
- [Testing](https://stripe.com/docs/testing)

## 💡 Fonctionnalités avancées (optionnelles)

- Webhooks pour les notifications de paiement
- Abonnements récurrents
- Gestion des remboursements automatiques
- Facturation automatique
- Multi-devises
