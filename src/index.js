import createRecommendationEngine from "./core/createRecommendationEngine.js";
import filterMoviesByFavoriteActors from "./core/filterMoviesByFavoriteActors.js";
import getMoviesAboveRating from "./core/getMoviesAboveRating.js";
import getMoviesByGenres from "./core/getMoviesByGenres.js";
import getMoviesReleasedAfterLastWatched from "./core/getMoviesReleasedAfterLastWatched.js";
import getTopRatedAndMostWatchedMovies from "./core/getTopRatedAndMostWatchedMovies.js";
import getUnwatchedMovies from "./core/getUnwatchedMovies.js";
import movies from "./data/movies.js";
import users from "./data/users.js";

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
