const express = require('express');
const router = express.Router();
const Character = require("../models/Character");

router.get("/characters", function (req, res, next) {
	Character.find()
		.then(() => {
			res.json();
		})
		.catch((error) => {
			next(error);
		});
});

router.get("/characters:id", function (req, res, next) {
	Character.findById(req.params.id)
		.then((id) => {
			res.json(id);
		});
});

router.post("/characters", (req, res, next) => {
	Character.create(req.body)
		.then((createdCharacter) => {
			res.json(createdCharacter);
		})
		.catch((error) => {
			next(error);
		});
});

router.patch("/characters/:id", (req, res, next) => {
	Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
		.then((updatedChar) => {
			res.json(updatedChar);
		})
		.catch((error) => {
			next(error);
		});
});

router.delete("/characters/:id", (req, res, next) => {
	Character.findByIdAndDelete(req.params.id)
		.then(() => {
			res.sendStatus(204);
		})
		.catch((error) => {
			next(error);
		});
});


module.exports = router;