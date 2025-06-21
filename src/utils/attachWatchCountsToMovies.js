const attachWatchCountsToMovies = (moviesList) => (watchedMovies) =>
  moviesList
    .filter((movie) => watchedMovies[movie.id])
    .map((el) => {
      return { ...el, count: watchedMovies[el.id] };
    });

export default attachWatchCountsToMovies;
