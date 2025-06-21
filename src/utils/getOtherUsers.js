const getOtherUsers = (users) => (user) =>
  users.filter((el) => el.id !== user.id);

export default getOtherUsers;
