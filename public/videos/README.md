# 📹 Comment ajouter votre vidéo

## Étape 1 : Préparer votre vidéo

1. **Format recommandé** : MP4 (H.264)
2. **Résolution** : 1080x1920 (format vertical pour iPhone) ou 1920x1080
3. **Taille** : Maximum 10MB pour des performances optimales
4. **Durée** : 10-30 secondes recommandé

## Étape 2 : Placer votre vidéo

1. Copiez votre vidéo dans ce dossier `/public/videos/`
2. Renommez-la `demo.mp4` ou modifiez le chemin dans le code

## Étape 3 : Modifier le code (si nécessaire)

Dans `app/page.js`, ligne ~166, changez le chemin :

```jsx
<source src="/videos/VOTRE-VIDEO.mp4" type="video/mp4" />
```

## 🎬 Optimiser votre vidéo

Pour réduire la taille de votre vidéo :

```bash
# Avec FFmpeg (à installer)
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M output.mp4
```

## ✅ Formats supportés

- ✅ MP4 (H.264) - Recommandé
- ✅ WebM
- ✅ OGG

## 📱 Test

Après avoir ajouté votre vidéo, rechargez la page. La vidéo devrait :
- Se lire automatiquement
- Être en boucle
- Être muette (pour autoplay)
- S'afficher dans le mockup iPhone 3D

## 🚨 Problèmes courants

**La vidéo ne se charge pas ?**
- Vérifiez le chemin du fichier
- Vérifiez que la vidéo est bien dans `/public/videos/`
- Vérifiez la console du navigateur pour les erreurs

**La vidéo est trop lourde ?**
- Compressez-la avec un outil en ligne
- Réduisez la résolution
- Réduisez la durée
