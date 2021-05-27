const repo = require('./task.memory.repository');
const Task = require('./task.model');

const getTasks = async (boardId) => {
  const tasks = await repo.getAll();

  return tasks.filter(task => task.boardId === boardId) || [];
};

const getTaskById = async (baordId, taskId) => {
  const boardTasks = await getTasks(baordId);

  return boardTasks.find(task => task.id === taskId);
};

const putData = async (oParams) => {
  const newTask = new Task(oParams);
  const tasks = await getTasks(oParams.boardId);
  const index = tasks.findIndex(task => task.id === oParams.id);
  if (index !== -1) {
    repo.replaceData(index, newTask);
  }
};

const addData = async (oParams) => {
  const task = new Task(oParams)
  repo.addData(task);
  return task;
};

const deleteTasks = async (taskId) => repo.deleteTask(taskId);

module.exports = {
  getTasks,
  addData,
  getTaskById,
  putData,
  deleteTasks
};