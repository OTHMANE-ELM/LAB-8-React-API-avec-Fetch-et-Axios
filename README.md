# TP 8 – Consommer une API avec Fetch et Axios dans React



## 📋 Présentation

Ce TP vous apprend à connecter une application React à une API REST externe pour récupérer et afficher des données dynamiques. Vous comparerez deux approches complémentaires :

- `fetch()` — l'API native du navigateur, sans installation
- `axios` — une librairie tierce qui simplifie les requêtes HTTP

À la fin de ce TP, votre application affiche :
- **Un bloc avec 5 titres d'articles** récupérés depuis `/posts` via `fetch()`
- **Un bloc avec les utilisateurs et leurs emails** récupérés depuis `/users` via `axios`

---

## 🗂️ Structure du projet

```
tp8-react-api/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PostsList.jsx       # Étape 3 – fetch()
│   │   └── UsersList.jsx       # Étape 4 – axios
│   ├── App.jsx                 # Étape 5 – Assemblage
│   ├── App.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

---


#### Bloc gauche — Articles via `fetch()`

Ce bloc affiche **5 titres d'articles** récupérés depuis :

L'application extrait uniquement le champ `title` pour l'afficher. Vous devriez voir apparaître 5 lignes comme :

```
• sunt aut facere repellat provident occaecati...
• qui est esse
• ea molestias quasi exercitationem repellat qui ipsa sit aut
• eum et est occaecati
• nesciunt quas odio
```

> ℹ️ Les titres sont en Latin (Lorem Ipsum) car JSONPlaceholder est une API de test avec des données factices.

---

#### Bloc droit — Utilisateurs via `axios`

Ce bloc affiche **10 utilisateurs** avec leur nom et email, récupérés depuis :

L'application extrait `name` et `email` pour afficher :

```
Leanne Graham — Sincere@april.biz
Ervin Howell — Shanna@melissa.tv
Clementine Bauch — Nathan@yesenia.net
...
```

> ℹ️ L'API retourne 10 utilisateurs au total. Aucun paramètre `?_limit` n'est utilisé ici, ils s'affichent tous.


## 🔬 Screenshot

<img width="1917" height="1022" alt="App" src="https://github.com/user-attachments/assets/4556fed2-a508-4344-8e05-0e827735bc00" />


> _L'application affichant les deux blocs de données en parallèle_

---

## 🔄 Cycle de vie d'une requête React

```
Montage du composant
       ↓
   useEffect()  ←── déclenché une seule fois (dépendances [])
       ↓
fetch() / axios.get()  ←── requête HTTP asynchrone
       ↓
   .then(data)
       ↓
  setState(data)  ←── déclenche un re-render
       ↓
  Affichage des données
```

---



## 👨‍💻 Auteur
**Othmane EL MATLINI**
TP réalisé dans le cadre du cours **Développement Front-End Moderne avec React**.
