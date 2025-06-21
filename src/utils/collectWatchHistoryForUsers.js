const collectWatchHistoryForUsers = (users) =>
  users.reduce((acc, user) => [...acc, ...user.history], []);

export default collectWatchHistoryForUsers;
