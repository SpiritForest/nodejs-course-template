const TASKS = [{
  "id": "0",
  "title": "string1",
  "order": 0,
  "description": "string",
  "userId": "string",
  "boardId": "10",
  "columnId": "string"
}, {
  "id": "1",
  "title": "string2",
  "order": 0,
  "description": "string",
  "userId": "string",
  "boardId": "1",
  "columnId": "string"
}];
// const TASKS = [];

const getAll = () => TASKS;

const addData = (board) => {
  TASKS.push(board);
  return board;
};

const replaceData = (index, data) => {
  TASKS.splice(index, 1, data);
};

module.exports = {
  getAll,
  addData,
  replaceData,
};