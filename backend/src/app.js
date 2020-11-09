const express = require('express');
const cors = require('cors');

const createTodoRouter = require('./routes/create');
const readTodoRouter = require('./routes/read');
const updateTodoRouter = require('./routes/update');
const deleteTodoRouter = require('./routes/delete');

const app = express();
app.use(express.json());
app.use(cors());

app.use(createTodoRouter);
app.use(readTodoRouter);
app.use(updateTodoRouter);
app.use(deleteTodoRouter);

app.all('*', async (req, res) => {
  res.status(404).json('Not Found')
})

module.exports = app;