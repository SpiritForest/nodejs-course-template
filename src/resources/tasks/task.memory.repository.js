const TASKS = [];

const findIndexById = (id) => TASKS.findIndex(data => data.id === id)

const getAll = async () => TASKS;

const addData = async (board) => {
  TASKS.push(board);
  return board;
};

const replaceData = async (index, data) => {
  TASKS.splice(index, 1, data);
};

const deleteTask = async (id) => {
  const index = findIndexById(id);
  if (index === -1) return false;
  TASKS.splice(index, 1);
  return true;
};

const deleteTaskByBoard = async (boardId) => {
  const boardTasks = TASKS.filter(task => task.boardId === boardId);
  if (!boardTasks.length) return false;
  boardTasks.forEach(task => deleteTask(task.id));
  return true;
};

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