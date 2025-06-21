const sortByMostRating = (moviesList) =>
  moviesList.sort((a, b) => b.rating - a.rating).slice(0, 20);

export default sortByMostRating;
