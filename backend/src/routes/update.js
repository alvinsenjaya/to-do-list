const express = require('express');

const Todo = require('../models/todo');
const validateId = require('../middleware/validate-id');


const router = express.Router();

const updateTodoRouter = router.put('/api/todo/:id', validateId, async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	if(!todo){
		res.status(404).json({error: 'Todo not found'});
	}

	todo.set({
		isCompleted: !todo.isCompleted
	})

	await todo.save();

	return res.status(200).json(todo);
});

module.exports = updateTodoRouter;