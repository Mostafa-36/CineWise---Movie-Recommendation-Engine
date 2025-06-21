import pipe from "../utils/pipe.js";

const getBasedGeners =
  (...genres) =>
  (movies) =>
    movies.filter((movie) =>
      movie.genres.some((genre) => genres.includes(genre))
    );

const extractUniqueMovies = (movies) => [
  ...new Map(movies.map((m) => [m.id, m])).values(),
];

const getMoviesByGenre = (...genres) =>
  pipe(getBasedGeners(...genres), extractUniqueMovies);

// getMoviesByGenre
//   getBasedGeners
//   extractUniqueMovies

export default getMoviesByGenre;
