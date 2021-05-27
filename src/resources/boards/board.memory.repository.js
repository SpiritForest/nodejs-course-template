// const BOARDS = [{
//   "id": "Board 1",
//   "title": "board 1 title",
//   "columns": [{
//     "id": "string",
//     "title": "string",
//     "order": 0
//   }]
// }];

const BOARDS = [];

const getAll = async () => BOARDS;

const addData = async (board) => {
  BOARDS.push(board);
  return board;
};

const replaceData = async (index, data) => {
  BOARDS.splice(index, 1, data);
};

const deleteByIndex = async (index) => {
  BOARDS.splice(index, 1);
};

module.exports = {
  getAll,
  addData,
  replaceData,
  deleteByIndex,
};