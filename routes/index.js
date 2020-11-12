const express = require("express")
const router = express.Router()

const axios = require("axios")
const { characterList } = require("../controllers/characters")
/* GET home page */
router.get("/", (req, res, next) => {
  axios
    .get("http://localhost:8000/characters")
    .then(( data ) => {
      console.log(data)
      res.render("index", { data })
    })
    .catch(err => console.log(err))
})

router.get("/characters/:page", characterList)
router.get("/ships", (req, res) => {
  res.render("ships")
})

router.get("/yolo", (req, res) => {
  // aqui accedes a la db y mandas eso como json
  res.json({
    yolo: true
  })
})

module.exports = router
