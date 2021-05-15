const TASKS = [{
  "title": "string1",
  "order": 0,
  "description": "string",
  "userId": "string",
  "boardId": "1",
  "columnId": "string"
}, {
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

module.exports = {
  getAll,
  addData
};