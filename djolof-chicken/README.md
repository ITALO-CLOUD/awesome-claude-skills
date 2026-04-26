# 🍗 DJOLOF Chicken — Site Web

Site vitrine moderne et responsive pour le restaurant **DJOLOF Chicken**, situé à
Almamya-Kaloum, Conakry, Guinée.

> *Le vrai goût du poulet africain* 🔥

## Aperçu

- **Slogan** : Le vrai goût du poulet africain
- **Note Google** : ★ 5,0 / 5
- **Adresse** : Almamya-Kaloum, Conakry, Guinée (G76P+V4)
- **Téléphone** : +224 627 27 67 21
- **Horaires** : Tous les jours, 08:00 – 00:00

## Structure

```
djolof-chicken/
├── index.html        # Page unique (toutes les sections)
├── css/styles.css    # Styles (couleurs chaudes, responsive)
├── js/script.js      # Interactivité (menu, filtre, formulaire)
└── images/           # Images additionnelles
```

## Sections

1. **Accueil** — Hero avec nom, slogan, note 5,0, CTA Appeler / Voir le menu
2. **Features** — 4 atouts : feu de bois, produits frais, service rapide, esprit africain
3. **Menu** — 9 plats filtrables par catégorie (Poulet, Plats, Accompagnements, Boissons), prix en GNF
4. **À propos** — Présentation du restaurant et statistiques
5. **Horaires** — Affichage clair, badge "Ouvert maintenant" en temps réel
6. **Contact** — Téléphone cliquable, WhatsApp, adresse, carte Google Maps intégrée
7. **Réservation / Commande** — Formulaire (nom, téléphone, message) qui redirige vers WhatsApp

## Design

- **Couleurs chaudes** : rouge (`#E63946`), orange (`#F77F00`), jaune (`#FFD60A`)
- **Typographie** : Poppins (texte) + Pacifico (script)
- **Animations légères** : reveal au scroll, flottement des éléments, pulsation, hover
- **Responsive** : mobile-first, breakpoints à 480 / 600 / 800 / 900 px
- **Performance** : aucun framework, CSS pur, JavaScript vanilla, < 30 Ko

## Fonctionnalités

- ✅ Bouton flottant **WhatsApp** (avec pulsation)
- ✅ Filtre du menu par catégorie
- ✅ Badge **"Ouvert maintenant"** mis à jour en direct
- ✅ Formulaire de contact qui redirige vers WhatsApp avec le message pré-rempli
- ✅ Carte Google Maps intégrée
- ✅ Numéro de téléphone cliquable (`tel:`)
- ✅ Navigation mobile avec menu hamburger
- ✅ Compatible avec `prefers-reduced-motion`

## Lancer en local

Le site est 100 % statique. Ouvrez simplement `index.html` dans un navigateur,
ou servez-le avec un serveur HTTP simple :

```bash
cd djolof-chicken
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Personnaliser

- **Prix / plats** : modifier les `<article class="menu-card">` dans `index.html`
- **Couleurs** : variables CSS au début de `css/styles.css` (`:root`)
- **Numéro WhatsApp** : remplacer `224627276721` dans `index.html` et `js/script.js`
- **Adresse Google Maps** : modifier le `src` de l'`<iframe>` dans la section Contact
