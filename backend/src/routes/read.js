const express = require('express');

const Todo = require('../models/todo');

const router = express.Router();

const readTodoRouter = router.get('/api/todo/', async (req, res) => {
	const todos = await Todo.find({})

	return res.status(200).json(todos);
});

module.exports = readTodoRouter;