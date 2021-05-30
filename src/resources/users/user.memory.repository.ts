import { IUser } from "../../types/user/user";

(function() {
  
  /**
 * User Memory module
 * @module user_repository
 */

  const USERS: IUser[] = [];

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
  const addData = (user: IUser) => {
    USERS.push(user);
    return user;
  };

  /**
 * Returns a user by specified id
 * @param {string} id String representation of user id
 * @returns {Promise} Promise object represents user data
 */
  const getById = (id: string) => USERS.find(user => user.id === id);

  /**
 * Replaced user data with a new one
 * @param {number} index Index of user in DB array
 * @param {{id: string, name: string, login: string, password: string}} data Data which will replace the existing one
 * @returns {Promise} Promise object represents user data was replaced
 */
  const replaceData = async (index: number, data: IUser) => {
    USERS.splice(index, 1, data);
  };

  /**
 * Deletes user from DB by index
 * @param {index} index Index of user in which will be deleted
 * @returns {Promise} Promise object represents that user was deleted
 */
  const deleteByIndex = async (index: number) => {
    USERS.splice(index, 1);
  };

  module.exports = {
    getAll,
    addData,
    getById,
    replaceData,
    deleteByIndex
  };
})();