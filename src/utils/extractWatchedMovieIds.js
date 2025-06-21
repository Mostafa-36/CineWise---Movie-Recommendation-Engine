const extractWatchedMovieIds = (user) => user.history.map((el) => el.movieId);

export default extractWatchedMovieIds;
