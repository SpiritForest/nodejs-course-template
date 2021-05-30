"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    /**
     * Board Service module
     * @module board_service
     */
    const repo = require('./board.memory.repository');
    const taskService = require('../tasks/task.memory.repository');
    /**
     * Geta all the boards from DB
     * @returns {Promise} Promise representaion of result getting boards
     */
    const getAll = async () => repo.getAll();
    /**
     * Returns board index in DB
     * @param {string} id String representation of board id
     * @returns {Promise} Promise object represents board index in DB
     */
    const getDataIndexById = async (id) => {
        const boards = await getAll();
        return boards.findIndex(data => data.id === id);
    };
    /**
     * Returns board data by specified id
     * @param {string} id String representation of board id
     * @returns {Promise} Promise object represents board data
     */
    const getById = async (id) => {
        const boards = await getAll();
        return boards.find(data => data.id === id);
    };
    /**
     * Adds board data to the DB
     * @param {object} data Board object
     * @param {string} data.id String representation of board Id
     * @param {String} data.title String representation of board title
     * @param {object[]} data.columns Array of board columns
     * @param {string} data.columns.id String representation of board column id
     * @param {string} data.columns.title String representation of board column title
     * @param {number} data.columns.order Board column order
     * @returns {Promise} Promise object represents board data
     */
    const addData = async (data) => repo.addData(data);
    /**
     * Replaces data for specifies board with a new one
     * @param {string} id String representation of board id
     * @param {object} data Board object
     * @param {string} data.id String representation of board Id
     * @param {String} data.title String representation of board title
     * @param {object[]} data.columns Array of board columns
     * @param {string} data.columns.id String representation of board column id
     * @param {string} data.columns.title String representation of board column title
     * @param {number} data.columns.order Board column order
     * @returns {Promise} Promise object represents board data
     */
    const putData = async (id, data) => {
        const index = await getDataIndexById(id);
        if (index !== -1) {
            await repo.replaceData(index, data);
        }
        return data;
    };
    /**
     * Deletes baord data from DB
     * @param {string} id String representation of board id
     * @returns {Promise} Promise object represents board index in DB
     */
    const deleteData = async (id) => {
        const index = await getDataIndexById(id);
        if (index !== -1) {
            await repo.deleteByIndex(index);
        }
        await taskService.deleteTaskByBoard(id);
        return index;
    };
    module.exports = {
        getAll,
        getById,
        addData,
        putData,
        deleteData,
    };
})();
