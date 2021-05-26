const repo = require('./task.memory.repository');

const getTasks = (boardId) => {
  const tasks = repo.getAll();

  return tasks.filter(task => task.boardId === boardId) || [];
};

const getTaskById = (baordId, taskId) => {
  const boardTasks = getTasks(baordId);

  return boardTasks.find(task => task.id === taskId);
};

const putData = (data) => {
  const { boardId, id } = data;
  const index = getTasks(boardId).findIndex(task => task.id === id);

  if (index !== -1) {
    repo.replaceData(index, data);
  }
};

const addData = (data) => repo.addData(data);

module.exports = {
  getTasks,
  addData,
  getTaskById,
  putData
};