# ci-cd-ynov-back

## Description

Ce dépôt contient le backend dédié à la gestion des Posts pour l’application ReactJS du repo ci-cd-ynov.  
Il fournit une API REST développée avec ExpressJS, connectée à une base de données MongoDB, et est conçu pour être facilement déployé et testé via Docker et des pipelines CI/CD.

> **Attention** : Ce backend ne gère que les Posts.  
> La gestion des Users (CRUD, authentification) est assurée par une API Flask et une base MySQL dans le dépôt principal [ci-cd-ynov](https://github.com/Arseid/ci-cd-ynov).

## Fonctionnalités principales

- API RESTful pour la gestion des Posts
- Base de données MongoDB (avec données de seed)
- Prêt pour le déploiement via Docker
- Tests unitaires (Jest) et end-to-end (Cypress)
- Intégration continue et déploiement automatisé

## Démarrage rapide

### Prérequis

- Docker & Docker Compose

### Lancer le projet

```bash
docker-compose up --build
```

- L’API sera accessible sur le port 3000 (modifiable dans la config).
- MongoDB sera initialisée avec les données de `mongo-seed/posts.json`.

### Documentation de l’API

Une documentation Swagger est disponible à l’adresse :  
`http://localhost:3000/api-docs`

## Pipeline CI/CD

- **Tests automatiques** : Lancement des tests unitaires et E2E à chaque push.
- **Build & déploiement** : Construction des images Docker et déploiement automatisé.
- **Déclenchement en chaîne** :  À la fin de cette pipeline, celle du dépôt principal [ci-cd-ynov](https://github.com/Arseid/ci-cd-ynov) est automatiquement lancée pour assurer la cohérence de l’ensemble de l’application.