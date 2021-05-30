import { Request, Response } from 'express';
import { IUser } from '../../types/user/user';

(function () {
  const router = require('express').Router();
  const User = require('./user.model');
  const usersService = require('./user.service');
  const constants = require('../utils/constants');
  
  
  // Get
  router.route('/').get(async (_req: Request, res: Response) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  });
  
  // Get User by ID
  router.route('/:id').get(async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await usersService.getById(id);
  
    if (!user) {
      res.status(constants.HTTP.NOT_FOUND).send('User not found');
    } else {
      res.status(constants.HTTP.OK);
      res.setHeader('Content-Type', 'application/json');
      res.json(User.toResponse(user));
    }
  });
  
  // Create User
  router.route('/').post(async (req: Request, res: Response) => {
    const user = new User(req.body)
  
    await usersService.addData(user);
  
    res.status(constants.HTTP.CREATED);
    res.setHeader('Content-Type', 'application/json');
    res.json(User.toResponse(user));
  });
  
  // Update
  router.route('/:id').put(async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, login, password } = req.body;
    const userData = new User({
      id,
      name,
      login,
      password
    })
    const user = await usersService.putData(id, userData);
  
    if (user) {
      res.status(constants.HTTP.OK);
      res.setHeader('Content-Type', 'application/json');
      res.json(User.toResponse(user));
    } else {
      res.status(constants.HTTP.BAD_REQUEST).send('Bad request');
    }
  });
  
  // Delete User
  router.route('/:id').delete(async (req: Request, res: Response) => {
    const { id } = req.params;
    const code = await usersService.deleteData(id);
  
    if (code === constants.CODES.NOT_FOUND) {
      res.status(constants.HTTP.NOT_FOUND).send('User not found');
    } else {
      res.status(constants.HTTP.DELETED).end();
    }
  });
  
  module.exports = router;  
})();