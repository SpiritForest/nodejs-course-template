"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(function () {
    const router = require('express').Router();
    const Board = require('./board.model');
    const boardService = require('./board.service');
    const constants = require('../utils/constants');
    const Column = require('../columns/column.model');
    // Get
    router.route('/').get(async (_req, res) => {
        const boards = await boardService.getAll();
        res.json(boards);
    });
    // Get Board by ID
    router.route('/:id').get(async (req, res) => {
        const { id } = req.params;
        const board = await boardService.getById(id);
        if (!board) {
            res.status(constants.HTTP.NOT_FOUND).send('Board not found');
        }
        else {
            res.status(constants.HTTP.OK);
            res.setHeader('Content-Type', 'application/json');
            res.json(board);
        }
    });
    // Create Board
    router.route('/').post(async (req, res) => {
        const { title, columns } = req.body;
        const board = new Board({
            title,
            columns: columns.map((column) => new Column(column))
        });
        await boardService.addData(board);
        res.status(constants.HTTP.CREATED);
        res.setHeader('Content-Type', 'application/json');
        res.json(board);
    });
    // Update
    router.route('/:id').put(async (req, res) => {
        const { id } = req.params;
        const { title, columns } = req.body;
        const board = new Board({
            id,
            title,
            columns: columns.map((column) => new Column(column))
        });
        await boardService.putData(id, board);
        if (board) {
            res.status(constants.HTTP.OK).json(board);
        }
        else {
            res.status(constants.HTTP.BAD_REQUEST).send('Bad request');
        }
    });
    // Delete Board
    router.route('/:id').delete(async (req, res) => {
        const { id } = req.params;
        const code = await boardService.deleteData(id);
        if (code === constants.CODES.NOT_FOUND) {
            res.status(constants.HTTP.NOT_FOUND).send('Board not found');
        }
        else {
            res.status(constants.HTTP.DELETED).end();
        }
    });
    module.exports = router;
})();
