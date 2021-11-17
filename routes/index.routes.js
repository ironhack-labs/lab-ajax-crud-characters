const express = require("express");
const router = express.Router();

const APIHandler = require("../public/javascript/APIHandler");
const api = new APIHandler("http://localhost:8000");

// GET characters
router.get("/", (req, res) => {
    api
    .getFullList()
    .then((characters) => res.json( { data: characters }))
    .catch(console.log)
});

// GET characters/:id
router.get("/:id", (req, res) => {
  api
  .getOneRegister(req.params.id)
  .then((character) => res.json( { data: character }))
  .catch(console.log)
});

// POST characters
router.post("/", (req, res) => {
  const { name, occupation, cartoon, weapon } = req.body
  api
  .createOneRegister({ name, occupation, cartoon, weapon })
  .then((character) => res.json( { data: character }))
  .catch(console.log)
});

// PUT characters/:id
router.put("/:id", (req, res) => {
  const { name, occupation, cartoon, weapon } = req.body
  api
  .updateOneRegister(req.params.id, { name, occupation, cartoon, weapon })
  .then((character) => res.json( { data: character }))
  .catch( () => console.log("Character not found" ))
});

router.get("/delete/:id", (req, res) => {
    api
    .deleteOneRegister(req.params.id)
    .then( () => console.log("Character has been successfully deleted" ))
    .catch( () => console.log("Character not found" ))
})

module.exports = router;
