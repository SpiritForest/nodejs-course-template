const repo = require('./board.memory.repository');
const taskService = require('../tasks/task.memory.repository');

const getAll = async () => repo.getAll();

const getDataIndexById = async (id) => {
  const boards = await getAll();
  return boards.findIndex(data => data.id === id);
};

const getById = async (id) => {
  const boards = await getAll();
  return boards.find(data => data.id === id);
};

const addData = async (data) => repo.addData(data);

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
  await taskService.deleteTaskByBoard(id);
  return index;
};

module.exports = {
  getAll,
  getById,
  addData,
  putData,
  deleteData,
};