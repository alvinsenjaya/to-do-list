const express = require('express');

const Todo = require('../models/todo');

const router = express.Router();

const createTodoRouter = router.post('/api/todo/', async (req, res) => {
    const { title } = req.body;

    const todo = new Todo({ title })
    await todo.save();

    return res.status(201).json(todo);
});

module.exports = createTodoRouter;