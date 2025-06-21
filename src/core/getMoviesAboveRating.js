const getMoviesAboveRating = (rating) => (movies) =>
  movies.filter((movie) => movie.rating > rating);

// getMoviesAboveRating

export default getMoviesAboveRating;
