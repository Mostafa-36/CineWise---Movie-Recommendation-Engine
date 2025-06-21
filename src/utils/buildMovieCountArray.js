const buildMovieCountArray = (movieObj) =>
  Object.entries(movieObj).map(([movieId, count]) => ({
    movieId: Number(movieId),
    count,
  }));

export default buildMovieCountArray;
