const router = require('express').Router();
const Board = require('./board.model');
const Task = require('../tasks/task.model');
const boardService = require('./board.service');
const taskService = require('../tasks/task.service');
const constants = require('../utils/constants');
const Column = require('../columns/column.model');

// Get
router.route('/').get((req, res) => {
  const boards = boardService.getAll();
  res.json(boards);
});

// Get Board by ID
router.route('/:id').get((req, res) => {
  const { id } = req.params;
  const board = boardService.getById(id);

  if (!board) {
    res.status(constants.HTTP.NOT_FOUND).send('Board not found');
  } else {
    res.status(constants.HTTP.OK);
    res.setHeader('Content-Type', 'application/json');
    res.json(board);
  }
});

// Create Board
router.route('/').post((req, res) => {
  const { title, columns } = req.body;
  const board = new Board({
    title,
    columns: columns.map(column => new Column(column))
  });

  boardService.addData(board);

  res.status(constants.HTTP.CREATED);
  res.setHeader('Content-Type', 'application/json');
  res.json(board);
});

// Update
router.route('/:id').put((req, res) => {
  const { id } = req.params;
  const { title, columns } = req.body;
  const board = new Board({
    id,
    title,
    columns: columns.map(column => new Column(column))
  });
  boardService.putData(id, board);

  if (board) {
    res.status(constants.HTTP.OK);
    res.setHeader('Content-Type', 'application/json');
    res.json(board);
  } else {
    res.status(constants.HTTP.BAD_REQUEST).send('Bad request');
  }
});

// Delete User
router.route('/:id').delete((req, res) => {
  const { id } = req.params;
  const code = boardService.deleteData(id);

  if (code === constants.CODES.NOT_FOUND) {
    res.status(constants.HTTP.NOT_FOUND).send('Board not found');
  } else {
    res.status(constants.HTTP.DELETED).end();
  }
});

// Get Tasks
router.route('/:boardId/tasks').get((req, res) => {
  const { boardId } = req.params;
  const tasks = taskService.getTasks(boardId);

  res.status(constants.HTTP.OK);
  res.setHeader('Content-Type', 'application/json');
  res.json(tasks);
});

// Create Tasks
router.route('/:boardId/tasks').post((req, res) => {
  const { title, order, description, userId, boardId, columnId } = req.body;
  const task = new Task({
    title,
    order,
    description,
    userId,
    boardId,
    columnId
  });

  taskService.addData(task);

  res.status(constants.HTTP.CREATED);
  res.setHeader('Content-Type', 'application/json');
  res.json(task);
});

module.exports = router;