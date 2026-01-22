#!/bin/bash

# Script de déploiement StudyBox sur Vercel
# Usage: ./deploy.sh

echo "🚀 Déploiement StudyBox sur Vercel"
echo "===================================="
echo ""

# Vérifier si Vercel CLI est installé
if ! command -v vercel &> /dev/null
then
    echo "⚠️  Vercel CLI n'est pas installé."
    echo "📦 Installation de Vercel CLI..."
    npm install -g vercel
    echo "✅ Vercel CLI installé"
    echo ""
fi

# Vérifier si l'utilisateur est connecté
echo "🔐 Vérification de la connexion Vercel..."
if ! vercel whoami &> /dev/null
then
    echo "⚠️  Vous n'êtes pas connecté à Vercel."
    echo "🔑 Connexion à Vercel..."
    vercel login
    echo ""
fi

echo "✅ Connecté à Vercel"
echo ""

# Déployer
echo "🚀 Déploiement en cours..."
echo ""
vercel --prod

echo ""
echo "✅ Déploiement terminé !"
echo ""
echo "📝 Prochaines étapes :"
echo "1. Configurez vos variables d'environnement dans Vercel Dashboard"
echo "2. Configurez votre domaine GoDaddy (voir DEPLOIEMENT_VERCEL.md)"
echo ""
