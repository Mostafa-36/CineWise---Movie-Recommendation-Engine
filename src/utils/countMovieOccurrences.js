const countMovieOccurrences = (historyMovies) =>
  historyMovies.reduce((acc, { movieId }) => {
    acc[movieId] = (acc[movieId] || 0) + 1;
    return acc;
  }, {});

export default countMovieOccurrences;
