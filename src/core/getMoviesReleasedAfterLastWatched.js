import compose from "../utils/compose.js";
import getMovieInfoById from "../utils/getMovieInfoById.js";
import getMoviesReleasedAfterDate from "../utils/getMoviesReleasedAfterDate.js";

const extractLastWatchedMovieId = (user) => user.history.at(-1).movieId;

const getMoviesReleasedAfterLastWatched = (user) => (movies) =>
  compose(
    getMoviesReleasedAfterDate(movies),
    getMovieInfoById("releaseYear")(movies),
    extractLastWatchedMovieId
  )(user);

// getMoviesReleasedAfterLastWatched
//    extractLastWatchedMovieId
//    getInfoMovie
//    getMoviesReleasedAfterLastWatched

export default getMoviesReleasedAfterLastWatched;
