const getInfoMovie = (infoType) => (movies) => (movieId) =>
  movies.find((movie) => movie.id === movieId)?.[infoType];

export default getInfoMovie;
