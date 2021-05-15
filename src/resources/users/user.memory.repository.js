const USERS = [{
  id: "052b7462-458c-4a08-a6ca-d9ddae6735e1",
  name: "Vasya",
  login: "vasya@pupkin",
  password: "12345"
}, {
  id: "a82dfa5d-cd76-4485-be1f-b42bbc33128b",
  name: "Tanya",
  login: "tanya22",
  password: "12345qwerty"
}];

// const USERS = [];

const getAll = () => USERS;

const addUser = (user) => {
  USERS.push(user);
  return user;
};

const getById = (id) => USERS.find(user => user.id === id)

const replaceData = (index, data) => {
  USERS.splice(index, 1, data);
};

const deleteByIndex = (index) => {
  USERS.splice(index, 1);
};

module.exports = {
  getAll,
  addUser,
  getById,
  replaceData,
  deleteByIndex
};