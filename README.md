Liiinks
---
[Github du projet](https://github.com/666alvin999/liinks)

[Liiinks](https://liiinks.netlify.app)

---

## Technologies utilisées

### TypeScript et l'architecture

Nous avons organisé l'architecture de l'application de sorte à ce qu'elle respecte les règles de l'architecture propre (style d'architecture démocratisé par Robert C. Martin dans sont livre "Clean Architecture"). Notre architecture est cependant une version "allégée" de celle-ci, car la couche application, qui contient normalement des viewModels, contient directement la vue, qui utilise directement les objets du domaine, ce qui n'est normalement pas le cas. En revanche, de par la simplicité du principe de l'application (CRUD), nous avons décidé de négliger cette partie. Cela n'empêche pourtant pas que nous ayons respecté au plus possible les principes SOLID, ainsi que les principes tels que le DRY, WET, YAGNI, ou le KISS. Pour faire tout cela, nous avons du utiliser TypeScript, afin de nous permettre un vrai typage des variables, chose essentielle dans une architecture de ce style.

### React

React étant la librairie JS avec laquelle nous avons le plus travaillé jusqu'ici, nous avons décidé de l'utiliser pour nous faciliter le travail et enlever le poids de la découverte d'une nouvelle librairie telle que Vue.js ou encore Angular.
Son fonctionnement par composant et son affichage conditionnel nous a permis de réutiliser des éléments dans différentes pages, et de les customiser en fonction des cas d'usages.

### React Router

React Router est une librairie React permettant de faciliter la navigation entre différentes pages. C'est une librairie bien connue et bien documentée, qui permet d'accomplir toutes les tâches primaires de navigation et bien plus.

### Vite

Create React App étant désormais déprécié, nous avons utilisé Vite pour instancier et gérer son projet. Sa prise en main rapide et facile est un vrai atout pour le déroulé d'un projet. De plus, même s'il est destiné avant tout à des applications de type Single Page, il n'est pas dur de le configurer pour le faire fonctionner avec de la navigation. L'atout principal de Vite est sa gestion dynamique de dépendances. En effet, si un package JS n'est pas utlisé dans une page, il ne le rechargera pas, contrairement à CRA qui chargeait toutes les dépendances, que l'on en ait besoin ou non.

### TailwindCSS

Pour le style du site web, nous avons opté pour TailwindCSS. Le choix n'était pas facile entre Bootstrap et celui-ci, mais ce qui nous a fait tranché est la modularité et la configuration avancée de Tailwind.

### Netlify

Pour l'hébergement, plusieurs choix étaient possibles : Vercel, Netlify, Github Pages. Nous avons opté pour le deuxième car une simple utilisation d'un package node permet de mettre en place un CI/CD efficace et simple d'utilisation.

### Airtable

La méthode de stockage de données étant imposée, nous n'avons pas eu de choix à faire là-dessus. En revanche, nous avons découvert un outil plutôt efficace, avec une documentation relative à la base de données qui est très intuitive (à partir du moment où l'on sait qu'elle existe) et qui est parfaite pour de petits projets comme celui-ci. Couplée au package Airtable.js, la création est gestion de données est plutôt simple, même si le nombre d'action et d'options sur les actions peut vite être submergeant.

### Iconoir

Lors de la création de l'application, nous voulions rajouter des icônes afin de render le site un peu plus esthétique. Nous avons découvert Iconoir, une librairie d'icône gratuite d'utilisation vraiment complète. L'utilisation de sa librairie JS est instinctive et donc facile à prendre en main.
