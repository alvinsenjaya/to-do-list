const express = require('express');

const Todo = require('../models/todo');
const validateId = require('../middleware/validate-id');

const router = express.Router();

const deleteTodoRouter = router.delete('/api/todo/:id', validateId, async (req, res) => {
	const todo = await Todo.findById(req.params.id);

	if(!todo){
		res.status(404).json({error: 'Todo not found'});
	}

	await todo.deleteOne();

	return res.status(204).json({});
});

module.exports = deleteTodoRouter;