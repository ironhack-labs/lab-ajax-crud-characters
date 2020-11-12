const axios = require("axios")

exports.characterList = (req, res) => {
  //imagino que obtienes el id del algun por que la docu señala: if you have the route /user/:name, then the “name” property is available as req.params.name.
  const  id  = req.params.id
  const url =
    id === 1
      ? `http://localhost:8000/characters`
      : `http://localhost:8000/characters/?:id=${id}`

  axios.get(url).then(( data ) => {

    res.render("characters", { data })
  })
}
