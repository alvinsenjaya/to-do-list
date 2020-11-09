const mongoose = require('mongoose');

const app = require('./app');

const start = async () => {
	try {
	  await mongoose.connect('mongodb://localhost:27017/to-do-list', {
	    useNewUrlParser: true,
	    useUnifiedTopology: true,
	    useCreateIndex: true
	  });
	  console.log('Connected to database');
	} catch (err) {
	  console.log(err);
	}

	app.listen(3001, () => {
	  console.log(`Server is running on port 3001`);
	});
};

start();


