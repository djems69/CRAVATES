# Site Vitrine TANY COLLECTION

Site vitrine élégant pour la vente de t-shirts, sweats à capuche et cravates personnalisées.

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla)
- Design élégant et responsive (mobile-first)

## Structure

```
TANY COLLECTION/
├── index.html          # Page d'accueil
├── categorie.html      # Page catégorie
├── produit.html        # Page produit
├── about.html          # Page À propos
├── contact.html        # Page Contact
├── css/
│   └── style.css       # Styles principaux
├── js/
│   ├── data.js         # Données des produits
│   └── app.js          # Logique de l'application
└── images/             # Dossier pour vos images
    ├── banner.jpg
    ├── category-tshirts.jpg
    ├── category-cravates.jpg
    ├── about.jpg
    └── [images produits]
```

## Utilisation

1. **Ouvrir le site** : Ouvrez simplement `index.html` dans votre navigateur
   - Ou utilisez un serveur local (ex: `python -m http.server` ou `npx serve`)

2. **Ajouter vos images** : Placez vos images dans le dossier `images/` :
   - `banner.jpg` - Bannière d'accueil
   - `category-tshirts.jpg` - Image catégorie t-shirts/sweats
   - `category-cravates.jpg` - Image catégorie cravates
   - `about.jpg` - Image page À propos
   - Images produits : `tshirt1-1.jpg`, `cravate1-1.jpg`, etc.

3. **Modifier les produits** : Éditez le fichier `js/data.js` pour ajouter/modifier vos produits

## Fonctionnalités

- ✅ Design élégant et raffiné
- ✅ Responsive mobile-first
- ✅ Navigation fluide
- ✅ Gestion des stocks par taille
- ✅ Distinction pièces uniques vs multiples
- ✅ Placeholders d'images automatiques
- ✅ Formulaire de contact
- ✅ Galerie d'images produits

## Personnalisation

- **Couleurs** : Modifiez les couleurs dans `css/style.css` (recherchez `#2c2c2c` pour la couleur principale)
- **Produits** : Modifiez `js/data.js` pour ajouter vos produits
- **Textes** : Modifiez directement les fichiers HTML

## Notes

- Les images manquantes affichent automatiquement des placeholders élégants
- Le formulaire de contact utilise un lien `mailto:` (vous pouvez le remplacer par un service backend)
- Le site fonctionne sans serveur, mais pour un déploiement en production, utilisez un serveur web
