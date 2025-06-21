`````markdown
# 🎬 CineWise — Functional Movie Recommender (Pure JS)

> A pure **functional programming (FP)** movie recommendation engine built in vanilla JavaScript.  
> No external libraries. No mutations. Just clean, composable logic — inspired by Netflix-style intelligence.

---

## 📌 What is CineWise?

CineWise is a **feature-rich movie recommendation engine** designed to demonstrate advanced concepts of **Functional Programming** in a real-world setting.

This project focuses on:

- Clean abstraction via pure functions
- Declarative pipelines (with `compose` / `pipe`)
- Reusability and modularity
- Zero mutation, zero side-effects
- Readable logic, ready for production or expansion

---

## 🚀 Features Implemented

| Feature #     | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| ✅ 1          | Recommend **most-watched movies** by _other users_           |
| ✅ 2          | Recommend movies that feature the user's **favorite actors** |
| ✅ 3          | Recommend **unwatched movies** only                          |
| ✅ 4          | Recommend movies **released after the last watched one**     |
| ✅ 5          | Recommend movies with **rating above a specific value**      |
| ✅ 6          | Recommend movies based on user's **favorite genres**         |
| ✅ 7 (Coming) | Combine strategies and return **top unique matches only**    |

---

## 🧠 Functional Programming Concepts Used

| FP Principle          | In CineWise                                        |
| --------------------- | -------------------------------------------------- |
| ✅ Pure Functions     | No function has side-effects or global state       |
| ✅ Immutability       | No mutation: data always transformed, not modified |
| ✅ Composition        | Features composed via `pipe` or `compose`          |
| ✅ Declarative Logic  | Uses `map`, `filter`, `reduce`, no `for` / `if`    |
| ✅ Reusability        | All logic is modular and composable                |
| ✅ Higher-Order Funcs | Functions return and receive other functions       |

---

## 🗂 File Structure

````text
cinewise-fp/
│
├── src/
│   ├── core/
│   │
│   │    ├── getTopRatedWatched.js
│   │    ├── filterByActors.js
│   │    ├── getUnwatched.js
│   │    ├── getByGenres.js
│   │    ├── getAboveRating.js
│   │    ├── getAfterLastWatched.js
│   │    └── createRecommendationEngine.js.js
│   │
│   │   ├── utils/
│   │   │   ├── pipe.js
│   │   │   ├── compose.js
│   │   │   ├── countMovieOccurrences.js
│   │   │   ├── getOtherUsers.js
│   │   │   ├── collectWatchHistoryForUsers.js
│   │   │   ├── getMovieViewCount.js
│   │   │   ├── buildMovieCountArray.js
│   │   │   ├── attachWatchCountsToMovies.js
│   │   │   ├── excludeMoviesByIds.js
│   │   │   ├── extractWatchedMovieIds.js
│   │   │   ├── getActorsFromWatchedMovies.js
│   │   │   ├── getMovieInfoById.js
│   │   │   ├── getMoviesReleasedAfterDate.js
│   │   │   ├── sortByMostRating.js
│   │   │   └── buildRecommendationsByActors.js
│   │
│   │
│
│   ├── data/
│   │   ├── users.js
│   │   └── movies.js
│
│   └── index.js
│
├── README.md
├── package.json
├── package-lock.json
└── .gitignore


---

## 📦 Sample Usage

```js

import pipe from "./utils/pipe.js";
import filterMoviesByFavoriteActors from "./core/filterMoviesByFavoriteActors.js";
import getMoviesAboveRating from "./core/strategies/getMoviesAboveRating.js";
import getMoviesByGenres from "./core/getMoviesByGenres.js";
import getMoviesReleasedAfterLastWatched from "./core/getMoviesReleasedAfterLastWatched.js";
import getTopRatedAndMostWatchedMovies from "./core/getTopRatedAndMostWatchedMovies.js";
import getUnwatchedMovies from "./core/getUnwatchedMovies.js";
import movies from "./data/movies.js";
import users from "./data/users.js";
import createRecommendationEngine from "./createRecommendationEngine.js";

// Feature 1: **most-watched movies** by _other users_
console.log(getTopRatedAndMostWatchedMovies(users, movies)(users[0]));

// Feature 2: movies that feature the user's **favorite actors**
console.log(filterMoviesByFavoriteActors(users[0])(movies));

// Feature 3: **unwatched movies** only
console.log(getUnwatchedMovies(users[0])(movies));

// Feature 4: movies **released after the last watched one**
console.log(getMoviesReleasedAfterLastWatched(users[0])(movies));

// Feature 5: movies with **rating above a specific value**
console.log(getMoviesAboveRating(8)(movies));

// Feature 6: movies based on user's **favorite genres**
console.log(getMoviesByGenres("Adventure", "Drama", "Action")(movies));

const recommendForUser = createRecommendationEngine(users, movies);

console.log(recommendForUser(users[0], 5));
````
`````

```

---

## 📈 Why CineWise Matters

While many tutorials teach FP concepts in isolation, **CineWise applies FP to real-world logic**, such as recommendations, filters, and behavioral data. It proves that **clean code** and **scalable logic** can be built using pure JS and FP design — no heavy frameworks required.

---

## 🙌 Built by

**Mostafa Adly**
Functional Programming Advocate
[GitHub Profile](https://github.com/YourUsername)
Clean Code • Algorithms • FP Enthusiast

---

> “FP is not about being fancy. It's about being fearless, flexible, and future-proof.”
```
