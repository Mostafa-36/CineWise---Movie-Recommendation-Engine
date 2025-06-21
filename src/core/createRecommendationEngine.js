import filterMoviesByFavoriteActors from "./filterMoviesByFavoriteActors.js";
import getMoviesAboveRating from "./getMoviesAboveRating.js";
import getMoviesByGenres from "./getMoviesByGenres.js";
import getMoviesReleasedAfterLastWatched from "./getMoviesReleasedAfterLastWatched.js";
import getTopRatedAndMostWatchedMovies from "./getTopRatedAndMostWatchedMovies.js";
import getUnwatchedMovies from "./getUnwatchedMovies.js";
import pipe from "../utils/pipe.js";

const createRecommendationEngine =
  (users, movies) =>
  (currentUser, rating = 7, genres = ["Adventure", "Drama"]) =>
    pipe(
      getTopRatedAndMostWatchedMovies(users, movies),
      getMoviesByGenres(...genres),
      filterMoviesByFavoriteActors(currentUser),
      getMoviesReleasedAfterLastWatched(currentUser),
      getMoviesAboveRating(rating),
      getUnwatchedMovies(currentUser)
    )(currentUser);

export default createRecommendationEngine;

// [
//   "Action",
//   "Sci-Fi",
//   "Adventure",
//   "Crime",
//   "Drama",
//   "Romance",
//   "Thriller",
//   "Mystery",
//   "Comedy",
//   "Animation",
//   "Family",
//   "Music",
//   "Biography",
//   "Fantasy",
//   "Horror",
//   "History",
//   "War",
// ]
