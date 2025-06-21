import compose from "./compose.js";

const filterMoviesByIdList = (movieIds) => (moviesList) =>
  moviesList.filter((movie) => movieIds.includes(movie.id));

const extractActors = (moviesList) =>
  moviesList.reduce((acc, movie) => [...acc, ...movie.actors], []);

const distinctActors = (actorsList) => [...new Set(actorsList)];

const getActorsFromWatchedMovies = (moviesList) => (movieIds) =>
  compose(
    distinctActors,
    extractActors,
    filterMoviesByIdList(movieIds)
  )(moviesList);

export default getActorsFromWatchedMovies;
