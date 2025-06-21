import countMovieOccurrences from "../utils/countMovieOccurrences.js";
import buildMovieCountArray from "../utils/buildMovieCountArray.js";

const getMovieViewCount = (historyMovies) =>
  countMovieOccurrences(historyMovies);

export default getMovieViewCount;
