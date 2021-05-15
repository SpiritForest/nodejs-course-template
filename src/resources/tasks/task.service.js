const repo = require('./task.memory.repository');

const getTasks = (boardId) => {
  const tasks = repo.getAll();
  
  return tasks.filter(task => task.boardId === boardId) || [];
};

const addData = (data) => repo.addData(data);

module.exports = { getTasks, addData };