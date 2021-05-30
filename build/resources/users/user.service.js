"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    /**
     * User Service module
     * @module user_service
     */
    const repo = require('./user.memory.repository');
    const taskRepo = require('../tasks/task.memory.repository');
    /**
     * Returns all users
     * @returns {Promise} Promise object represents array of users
     */
    const getAll = async () => repo.getAll();
    /**
     * Returns index user data in DB by specified id
     * @param {string} id String representation of user id
     * @returns {Promise} Promise object represents index data in DB
     */
    const getDataIndexById = async (id) => {
        const users = await getAll();
        return users.findIndex(data => data.id === id);
    };
    /**
     * Returns user data by specified id
     * @param {string} id String representation of user id
     * @returns {Promise} Promise object represents user data
     */
    const getById = async (id) => {
        const users = await getAll();
        return users.find(data => data.id === id);
    };
    /**
     * Adds user data to DB
     * @param {{id: string, name: string, login: string, password: string}} data user data
     * @returns {Promise} Promise object represents that user data was added
     */
    const addData = (data) => repo.addData(data);
    /**
     * Replaces user data by user id
     * @param {string} id String representation of user id
     * @param {{id: string, name: string, login: string, password: string}} data user data
     * @returns {Promise} Promise object represets user data
     */
    const putData = async (id, data) => {
        const index = await getDataIndexById(id);
        if (index !== -1) {
            await repo.replaceData(index, data);
        }
        return data;
    };
    /**
     * Deletes user by specified id
     * @param {string} id String representation of user id
     * @returns {Promise} Promise object represents index of data
     */
    const deleteData = async (id) => {
        const index = await getDataIndexById(id);
        if (index !== -1) {
            await repo.deleteByIndex(index);
        }
        taskRepo.unAssignUser(id);
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
