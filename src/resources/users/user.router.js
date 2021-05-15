const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const constants = require('../utils/constants');


// Get
router.route('/').get((req, res) => {
  const users = usersService.getAll();
  res.json(users.map(User.toResponse));
});

// Get User by ID
router.route('/:id').get((req, res) => {
  const { id } = req.params;
  const user = usersService.getById(id);

  if (!user) {
    res.status(constants.HTTP.NOT_FOUND).send('User not found');
  } else {
    res.status(constants.HTTP.OK);
    res.setHeader('Content-Type', 'application/json');
    res.json(User.toResponse(user));
    ;
  }
});

// Create User
router.route('/').post((req, res) => {
  const user = new User(req.body)

  usersService.addUser(user);

  res.status(constants.HTTP.CREATED);
  res.setHeader('Content-Type', 'application/json');
  res.json(User.toResponse(user));
});

// Update
router.route('/:id').put((req, res) => {
  const { id } = req.params;
  const user = usersService.putData(id, req.body);

  if (user) {
    res.status(constants.HTTP.OK);
    res.setHeader('Content-Type', 'application/json');
    res.json(User.toResponse(user));
  } else {
    res.status(constants.HTTP.BAD_REQUEST).send('Bad request');
  }
});

// Delete User
router.route('/:id').delete((req, res) => {
  const { id } = req.params;
  const code = usersService.deleteData(id);

  if (code === constants.CODES.NOT_FOUND) {
    res.status(constants.HTTP.NOT_FOUND).send('User not found');
  } else {
    res.status(constants.HTTP.DELETED).end();
  }

})

module.exports = router;
