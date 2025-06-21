import pipe from "../utils/pipe.js";
import getOtherUsers from "../utils/getOtherUsers.js";
import collectWatchHistoryForUsers from "../utils/collectWatchHistoryForUsers.js";
import getMovieViewCount from "../utils/getMovieViewCount.js";
import attachWatchCountsToMovies from "../utils/attachWatchCountsToMovies.js";
import sortByMostRating from "../utils/sortByMostRating.js";

const getTopRatedAndMostWatchedMovies = (users, movies) =>
  pipe(
    getOtherUsers(users),
    collectWatchHistoryForUsers,
    getMovieViewCount,
    attachWatchCountsToMovies(movies),
    sortByMostRating
  );

export default getTopRatedAndMostWatchedMovies;

// getOtherUsers
// collectWatchHistory
// getMovieViewCount
//     countMovieOccurrences
//     buildMovieCountArray
//attachWatchCountsToMovies
