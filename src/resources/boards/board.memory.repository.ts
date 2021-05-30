import { IBoard } from '../../types/board/board';

(function() {

  // const BOARDS = [{
//   "id": "Board 1",
//   "title": "board 1 title",
//   "columns": [{
//     "id": "string",
//     "title": "string",
//     "order": 0
//   }]
// }];

/**
 * Board memory module
 * @module board_repository
 */

const BOARDS: IBoard[] = [];

/**
 * Returs all the boards
 * @returns {Promise} Promise representation of array of boards
 */
const getAll = async () => BOARDS;

/**
 * Adds board to the DB
 * @param {object} board Board object
 * @param {string} board.id String representation of board Id
 * @param {String} board.title String representation of board title
 * @param {object[]} board.columns Array of board columns
 * @param {string} board.columns.id String representation of board column id
 * @param {string} board.columns.title String representation of board column title
 * @param {number} board.columns.order Board column order
 * @returns {Promise} Promise object represents board data
 */
const addData = async (board: IBoard) => {
  BOARDS.push(board);
  return board;
};

/**
 * Replaces board data with a new one
 * @param {number} index Index of board in DB
 * @param {object} board Board object
 * @param {string} board.id String representation of board Id
 * @param {String} board.title String representation of board title
 * @param {object[]} board.columns Array of board columns
 * @param {string} board.columns.id String representation of board column id
 * @param {string} board.columns.title String representation of board column title
 * @param {number} board.columns.order Board column order
 * @returns {Promise} Promise representation of result of replacing data
 */
const replaceData = async (index: number, data: IBoard) => {
  BOARDS.splice(index, 1, data);
};

/**
 * Deletes board by specified index
 * @param {number} index 
 * @returns {Promise} Promise object represents result of data deletion
 */
const deleteByIndex = async (index: number) => {
  BOARDS.splice(index, 1);
};

module.exports = {
  getAll,
  addData,
  replaceData,
  deleteByIndex,
};
})();