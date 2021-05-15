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

const getAll = () => USERS;

const addUser = (user) => {
  USERS.push(user);
  return user;
}

const getById = (id) => USERS.find(user => user.id === id)

const put = (id, user) => {
  let data = getById(id);
  
  data = {
    id,
    name: user.name,
    login: user.login,
    password: user.password
  }
  return data;
}

module.exports = { getAll, addUser, getById, put };
