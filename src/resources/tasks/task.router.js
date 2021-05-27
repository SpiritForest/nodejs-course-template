const router = require('express').Router({mergeParams: true});
const taskService = require('./task.service');
const constants = require('../utils/constants');


// Get Tasks
router.route('/').get(async (req, res) => {
  const { boardId } = req.params;
  const tasks = await taskService.getTasks(boardId);

  res.status(constants.HTTP.OK).json(tasks);
});

// Get Tasks by Id
router.route('/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.getTaskById(boardId, taskId);
  if (task) {
    res.status(constants.HTTP.OK).json(task);
  } else {
    res.status(constants.HTTP.NOT_FOUND).send();
  }
});

// Create Tasks
router.route('/').post(async (req, res) => {
  const { boardId } = req.params;
  const task = await taskService.addData({...req.body, boardId});
  res.status(constants.HTTP.CREATED).json(task);
});

// Update Task
router.route('/:taskId').put(async (req, res) => {
  const { boardId, taskId } = req.params;
  const task = await taskService.putData({...req.body, boardId, taskId});
  res.status(constants.HTTP.OK).json(task);
});

router.route('/:taskId').delete(async (req, res) => {
  const { taskId } = req.params;
  const isDeleted = await taskService.deleteTasks(taskId);
  if (isDeleted) {
    res.status(constants.HTTP.DELETED).send();
  } else {
    res.status(constants.HTTP.NOT_FOUND).send();
  };
})

module.exports = router;