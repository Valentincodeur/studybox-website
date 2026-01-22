# Instructions pour compléter les 14 partenaires

## Modifications déjà effectuées ✅
- Grille passée de 3 colonnes à 2 colonnes (plus larges)
- Hauteur des photos augmentée de h-64 à h-72
- 3 partenaires déjà créés avec des couleurs différentes

## À faire : Ajouter 11 partenaires supplémentaires

Ouvrez le fichier `app/partenaires/page.js` et ajoutez ces 11 blocs AVANT la ligne `</div>` qui ferme la grille (actuellement ligne 226).

Copiez-collez chaque bloc en remplaçant les informations :

### Partenaire 4 (Orange)
```jsx
{/* PARTENAIRE 4 */}
<div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
  <div className="h-72 bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
    <div className="text-center">
      <div className="w-20 h-20 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-3">
        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <p className="text-sm text-gray-500 font-medium">Insérer photo</p>
    </div>
  </div>
  <div className="p-8">
    <h3 className="text-2xl font-bold text-black mb-2">Nom du partenaire</h3>
    <p className="text-gray-600 leading-relaxed mb-6">Description courte du partenaire et de la collaboration.</p>
    <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
      <div className="flex items-start"><svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><span className="text-sm text-gray-600">Adresse complète</span></div>
      <div className="flex items-start"><svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span className="text-sm text-gray-600">contact@exemple.com</span></div>
      <div className="flex items-start"><svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span className="text-sm text-gray-600">+33 X XX XX XX XX</span></div>
      <div className="flex items-start"><svg className="w-5 h-5 mr-3 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg><span className="text-sm text-gray-600">Type / Secteur</span></div>
    </div>
    <a href="#" className="text-blue-600 font-semibold text-sm hover:underline inline-flex items-center">Visiter le site<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
  </div>
</div>
```

Pour les partenaires 5 à 14, copiez le même code en changeant uniquement la ligne de couleur :
- **Partenaire 5**: `from-red-50 to-rose-100`
- **Partenaire 6**: `from-cyan-50 to-sky-100`
- **Partenaire 7**: `from-yellow-50 to-lime-100`
- **Partenaire 8**: `from-indigo-50 to-violet-100`
- **Partenaire 9**: `from-emerald-50 to-green-100`
- **Partenaire 10**: `from-fuchsia-50 to-purple-100`
- **Partenaire 11**: `from-slate-50 to-gray-100`
- **Partenaire 12**: `from-amber-50 to-orange-100`
- **Partenaire 13**: `from-teal-50 to-cyan-100`
- **Partenaire 14**: `from-pink-50 to-rose-100`

## Résultat final
Vous aurez 14 cases de partenaires affichées sur 2 colonnes (7 lignes), chacune avec une couleur différente et des espacements généreux.
