const usersRepo = require('./user.memory.repository');
const User = require('./user.model');


const getAll = () => usersRepo.getAll();

const getDataIndexById = (id) => getAll().findIndex(data => data.id === id);

const addUser = (user) => usersRepo.addUser(user);

const getById = (id) => getAll().find(user => user.id === id);

const putData = (id, data) => {
  const index = getDataIndexById(id);

  
  const { name, password, login } = data;
  const newUserData = new User({
    id,
    name,
    password,
    login
  });
  
  if (index !== -1) {
    usersRepo.replaceData(index, newUserData);
  }
  
  return newUserData;
};

const deleteData = (id) => {
  const index = getDataIndexById(id);

  if (index !== -1) {
    usersRepo.deleteByIndex(index);
  }

  return index;
};

module.exports = {
  getAll,
  addUser,
  getById,
  putData,
  deleteData,
};