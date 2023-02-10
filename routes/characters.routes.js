const ApiService = require('../public/javascript/api.services');
const apiService = new ApiService()

router.get('/characters', (req, res) => {
    apiService
    .getAllCharacters()
    .then((response) => {
      res.json(response.data);
    })
    .catch(err, console.log (err) )
});

router.get("/characters/:id", (req,res) => {
    const { characterId } = req.params

    apiService
    .getOneCharacter(characterId)
    .then(response => {
        res.json(response.data)
    })
    .catch(err => console.log (err) )
})

router.post('/characters', (req,res) => {
    const { name, occupation, cartoon, weapon } = req.body

    if (  name !== "" || occupation !== "" || cartoon !== "" || weapon !== "") {

        return console.log ("Error") 
    }

        apiService
        .createCharacter({ name, occupation, cartoon, weapon })
        .then(response => {
            res.json(response.data)
        })
        .catch()
    
})

router.put('/characters/:id', (req,res) => {
    const { characterId } = req.params
    const { name, occupation, cartoon, weapon } = req.body

    apiService
    .editCharacter(characterId, { name, occupation, cartoon, weapon } )
    .then(response => {
        res.json(response.data)
    })
    .catch(res.send('Character not found'))
})


router.delete("/characters/:id", (req,res) => {
    const { characterId } = req.params

    apiService
    .deleteCharacter(characterId)
    .then(response => {
        res.send("Character has been successfully deleted")
    })
    .catch(res.send('Character not found'))
})


module.exports = router;