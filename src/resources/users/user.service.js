const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const addUser = (user) => usersRepo.addUser(user);
const getById = (id) => usersRepo.getById(id);
const putData = (id, data) => usersRepo.put(id, data);
module.exports = { getAll, addUser, getById, putData };
