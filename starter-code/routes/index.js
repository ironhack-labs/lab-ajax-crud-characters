const express = require("express");
const router = express.Router();
const {
  getFullList,
  updateOneRegister,
  deleteOneRegister,
  createOneRegister,
  getOneRegister
} = require("../public/javascript/APIHandler");
/* GET home page */
router
  .get("/characters", getFullList)
  .get("/characters/:characterId", getOneRegister)
  .post("/characters", createOneRegister)
  .patch("/characters/:characterId", updateOneRegister)
  .delete("/characters/:characterId", deleteOneRegister);

module.exports = router;