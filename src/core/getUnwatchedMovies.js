import compose from "../utils/compose.js";
import extractWatchedMovieIds from "../utils/extractWatchedMovieIds.js";
import excludeMoviesByIds from "../utils/excludeMoviesByIds.js";

const getUnwatchedMovies = (user) => (movies) =>
  compose(excludeMoviesByIds(movies), extractWatchedMovieIds)(user);

// getUnwatchedMovies
//    extractWatchedMovieIds
//    excludeMoviesByIds

export default getUnwatchedMovies;
