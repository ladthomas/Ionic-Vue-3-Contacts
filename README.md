
# Ionic Vue 3 Contacts

Réaliser une application web mobile de gestion de contacts en utilisant Vue 3 et Ionic8.

##  Étapes

## Fonctionnalités

L’application permet de gérer les contacts de façon CRUD. On peut donc créer, voir,modifier et supprimer les contacts.

- **Liste des contacts** : Affiche tous les contacts enregistrés.
- **Ajouter un contact** : Permet d'ajouter un nouveau contact.
- **Modifier un contact** : Permet de modifier les informations d'un contact existant.
- **Supprimer un contact** : Permet de supprimer un contact.
- **Recherche de contacts** : Permet de rechercher des contacts par nom ou email.

## Prérequis

- Node.js (version 14 ou supérieure)
- npm (version 6 ou supérieure) ou Yarn

## Installation

1. Clonez le dépôt :
   ```bash
   git clone <votre-repo-git>
   cd <votre-repo>
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancer l'application

Pour démarrer l'application en mode développement, utilisez la commande suivante :

```bash
ionic serve
```
# Bonus 

- Mettre en place une fonctionnalité de recherche dans la liste de contacts (paged’accueil).

## 📏 Contraintes
- Le starter template Ionic le plus approprié pour ce projet est “list”.
- Vous pouvez utiliser javascript au lieu de typescript. Dans ce cas, suivez les étapessuivantss pour transformer votre projet : [Iionic Docs](https://ionicframework.com/docs/vue/quickstart#build-your-way-with-typescript-or-javascript).

Vous pouvez aussi utiliser le starter [Kit](https://github.com/cba85/ionic8-vue3-js-list).

## Structure du projet

```
.
├── src
│   ├── assets
│   ├── components
│   ├── router
│   │   └── index.js
│   ├── views
│   │   ├── Home.vue
│   │   ├── CreateContact.vue
│   │   ├── EditContact.vue
│   │   └── ContactDetail.vue
│   ├── App.vue
│   └── main.js
├── public
├── README.md
├── package.json
└── vite.config.js
```

## Construit avec
- [ ] Tailwind
- [ ] Next.js
- [x] Html
- [ ] Python
- [ ] C#
- [ ] Css
- [x] Js
- [x] vue


## Gestion des versions

Les versions disponibles ainsi que les journaux décrivant les changements apportés sont disponibles depuis [lien du sites ](https://contactsappionic.netlify.app/)