import pipe from "../utils/pipe.js";
import getActorsFromWatchedMovies from "../utils/getActorsFromWatchedMovies.js";
import buildRecommendationsByActors from "../utils/buildRecommendationsByActors.js";
import extractWatchedMovieIds from "../utils/extractWatchedMovieIds.js";

const filterMoviesByFavoriteActors = (user) => (movies) =>
  pipe(
    extractWatchedMovieIds,
    getActorsFromWatchedMovies(movies),
    buildRecommendationsByActors(movies)
  )(user);

// extractWatchedMovieIds
// getActorsFromWatchedMovies
//   filterMoviesByIds
//   extractActors,
//   distinctActors,
// getMoviesByActors
//   getAllMovies
//   distinctMovies
export default filterMoviesByFavoriteActors;
