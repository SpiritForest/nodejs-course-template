const repo = require('./user.memory.repository');
const taskRepo = require('../tasks/task.memory.repository');

const getAll = async () => repo.getAll();

const getDataIndexById = async (id) => {
  const users = await getAll()
  return users.findIndex(data => data.id === id);
};

const getById = async (id) => {
  const users = await getAll();
  return users.find(data => data.id === id);
};

const addData = (data) => repo.addData(data);

const putData = async (id, data) => {
  const index = await getDataIndexById(id);
  
  if (index !== -1) {
    await repo.replaceData(index, data);
  }
  
  return data;
};

const deleteData = async (id) => {
  const index = await getDataIndexById(id);

  if (index !== -1) {
    await repo.deleteByIndex(index);
  }
  taskRepo.unAssignUser(id);
  return index;
};

module.exports = {
  getAll,
  getById,
  addData,
  putData,
  deleteData,
};