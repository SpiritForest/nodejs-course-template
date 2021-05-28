/**
 * User Memory module
 * @module user_repository
 */

// const USERS = [{
//   id: "052b7462-458c-4a08-a6ca-d9ddae6735e1",
//   name: "Vasya",
//   login: "vasya@pupkin",
//   password: "12345"
// }, {
//   id: "a82dfa5d-cd76-4485-be1f-b42bbc33128b",
//   name: "Tanya",
//   login: "tanya22",
//   password: "12345qwerty"
// }];

const USERS = [];

/**
 * Returns all users
 * @returns {Promise} Promise object represents array of users
 */
const getAll = async () => USERS;

/**
 * Adds a user to the DB
 * @param {{id: string, name: string, login: string, password: string}} user Object with properties which represents user data
 * @returns {Promise} Promise object represents user data
 */
const addData = (user) => {
  USERS.push(user);
  return user;
};

/**
 * Returns a user by specified id
 * @param {string} id String representation of user id
 * @returns {Promise} Promise object represents user data
 */
const getById = (id) => USERS.find(user => user.id === id);

/**
 * Replaced user data with a new one
 * @param {number} index Index of user in DB array
 * @param {{id: string, name: string, login: string, password: string}} data Data which will replace the existing one
 * @returns {Promise} Promise object represents user data was replaced
 */
const replaceData = async (index, data) => {
  USERS.splice(index, 1, data);
};

/**
 * Deletes user from DB by index
 * @param {index} index Index of user in which will be deleted
 * @returns {Promise} Promise object represents that user was deleted
 */
const deleteByIndex = async (index) => {
  USERS.splice(index, 1);
};

module.exports = {
  getAll,
  addData,
  getById,
  replaceData,
  deleteByIndex
};