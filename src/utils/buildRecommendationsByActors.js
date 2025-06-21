import compose from "./compose.js";

const distinctMovies = (movies) => [
  ...new Map(movies.map((movie) => [movie.id, movie])).values(),
];

const collectMoviesByActors = (movies) => (actors) =>
  actors.flatMap((actor) =>
    movies.filter((movie) => movie.actors.includes(actor))
  );

const buildRecommendationsByActors = (movies) =>
  compose(distinctMovies, collectMoviesByActors(movies));

export default buildRecommendationsByActors;
