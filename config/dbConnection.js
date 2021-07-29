const mongoose = require("mongoose");


mongoose
	.connect(process.env.MONGO_URI, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	.then(() => {
		console.log("connected to the db!");
	})
	.catch((error) => {
		console.log(error);
	});