const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get((req, res) => {
  const users = usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get((req, res) => {
  const { id } = req.params;
  const user = usersService.getById(id);

  res.json(User.toResponse(user));
});

router.route('/').post((req, res) => {
  const user = new User(req.body)

  usersService.addUser(user);

  res.json(User.toResponse(user));
});

router.route('/:id').put((req, res) => {
  const { id } = res.params;

  usersService.putData(id, req.body);
})

module.exports = router;
