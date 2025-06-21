const excludeMoviesByIds = (movies) => (moviesIds) =>
  movies.filter((movie) => !moviesIds.includes(movie.id));

export default excludeMoviesByIds;
