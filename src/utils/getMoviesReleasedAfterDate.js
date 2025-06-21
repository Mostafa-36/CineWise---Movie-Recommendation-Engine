const getMoviesReleasedAfterDate =
  (movies) =>
  (date = 2000) =>
    movies.filter((movie) => movie.releaseYear >= Number(date));

export default getMoviesReleasedAfterDate;
