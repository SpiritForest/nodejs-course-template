/**
 * Task Service module
 * @module task_repository
 */

const TASKS = [];

/**
 * Gets task by its id
 * @param {string} id string representation of task id
 * @returns {number} return index number of task in the DB 
 */
const findIndexById = (id) => TASKS.findIndex(data => data.id === id)

/**
 * Returns all the tasks
 * @returns {Promise} returns tasks
 */
const getAll = async () => TASKS;

/**
 * Adds a task to a DB
 * @param {{id: string, title: string, order: number, description: string, userId: string, boardId: string, columnId: string,}} task Task data
 * @returns {Promise} promise returns task
 */
const addData = async (task) => {
  TASKS.push(task);
  return task;
};

/**
 * Replaces existing task data with a new one
 * @param {number} index position task in the DB
 * @param {{id: string, title: string, order: number, description: string, userId: string, boardId: string, columnId: string,}} data new task which will replace the existing one
 * @returns {Promise} Promise object represents that data was modified
 */
const replaceData = async (index, data) => {
  TASKS.splice(index, 1, data);
};

/**
 * Deletes task from DB
 * @param {string} id string representation of task id
 * @returns {Promise} Promise object represents boolean value, if task was deleted returns true and false if not
 */
const deleteTask = async (id) => {
  const index = findIndexById(id);
  if (index === -1) return false;
  TASKS.splice(index, 1);
  return true;
};

/**
 * Deletes all the tasks from specified board
 * @param {string} boardId string representation of board id 
 * @returns {Promise} Promise object represents boolean value, if tasks were removed from the specified board returns true and false if not
 */
const deleteTaskByBoard = async (boardId) => {
  const boardTasks = TASKS.filter(task => task.boardId === boardId);
  if (!boardTasks.length) return false;
  boardTasks.forEach(task => deleteTask(task.id));
  return true;
};

/**
 * Replaces user id in tasks to null
 * @param {string} userId String representation of user id
 * @returns {Promise} Promise object represents that user id was replaced in all the tasks
 */
const unAssignUser = async (userId) => {
  const filtered = TASKS.filter(task => task.userId === userId);
  filtered.forEach(task => {
    const taksLink = task;
    taksLink.userId = null
  });
}

module.exports = {
  getAll,
  addData,
  replaceData,
  deleteTask,
  deleteTaskByBoard,
  unAssignUser
};