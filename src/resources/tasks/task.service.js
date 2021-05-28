/**
 * Task Service module
 * @module task_service
 */


const repo = require('./task.memory.repository');
const Task = require('./task.model');

/**
 * Gets all the tasks for specified board
 * @param {string} boardId 
 * @returns {Promise} Promise object represents an array of tasks
 */
const getTasks = async (boardId) => {
  const tasks = await repo.getAll();

  return tasks.filter(task => task.boardId === boardId) || [];
};

/**
 * Returns a specified task
 * @param {string} baordId gets task for specified board 
 * @param {string} taskId task that will be send if any 
 * @returns {Promise} Promise object represents that the task was received
 */
const getTaskById = async (baordId, taskId) => {
  const boardTasks = await getTasks(baordId);

  return boardTasks.find(task => task.id === taskId);
};

/**
 * Puts task data to the DB
 * @param {{id: string, title: string, order: number, description: string, userId: string, boardId: string, columnId: string,}} oParams parameters which are needed to create a new task
 * @returns {Promise} Promise object represent that the data was replaced
 */
const putData = async (oParams) => {
  const newTask = new Task(oParams);
  const tasks = await getTasks(oParams.boardId);
  const index = tasks.findIndex(task => task.id === oParams.id);
  if (index !== -1) {
    repo.replaceData(index, newTask);
  }
};

/**
 * Adds data to the DB
 * @param {{id: string, title: string, order: number, description: string, userId: string, boardId: string, columnId: string,}} oParams task data
 * @returns {Promise} Promise object represents an instance of task
 */
const addData = async (oParams) => {
  const task = new Task(oParams)
  repo.addData(task);
  return task;
};

/**
 * Deletes task from DB
 * @param {string} taskId string representation of task id
 * @returns {Promise} Promise object represents that task was deleted
 */
const deleteTasks = async (taskId) => repo.deleteTask(taskId);

module.exports = {
  getTasks,
  addData,
  getTaskById,
  putData,
  deleteTasks
};