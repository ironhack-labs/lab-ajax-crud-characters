const router = require('express').Router();
//require and instantiate the API service
const APIHandler = require('../javascript/APIHandler');
const apiHandler = new APIHandler();

// list all the characters from the API
router.get('/characters/list', (req, res) => {
    
    apiHandler
        .getFullList()
        .then((response) => {
            res.json(response.data);
            res.send('pages/characters-list', { characters: response.data })
        })
        .catch(error => console.log(error));
});
// render a form to create a new character
router.get('/characters/create', (req, res) => {
    res.render('pages/new-character');
});
// sumit info to create a new character
router.post('/characters/create', (req, res) => {
    
    const characterInfo = req.body;

    apiHandler
    .createOneRegister(characterInfo)
    .then((response) => {
        
        res.redirect('/characters/list');
    })
    .catch(error => console.log(error));
});
// render a form to edit a character
router.get('/character/update/:id', (req, res) => {
    const characterId = req.params.id;
 
    apiHandler
    .getOneRegister(characterId)
    .then((response) => {
      
      res.render('pages/edit-character', { character: response.data });
    })
    .catch(error => console.log(error));
});

// sumit info to edit a character with a matching id
router.post('/character/update/:id', (req, res) => {
    
    const characterId = req.params.id;
    const characterInfo = req.body;
 
    apiHandler
    .updateOneRegister(characterId, characterInfo)
    .then((response) => {
     
      res.redirect('/characters/list');
    }) 
    .catch((error) => console.log(error));
});
// delete a character with a matching id
router.get('/characters/delete/:id', (req, res) => {
    
    const characterId = req.params.id;
 
    apiHandler
    .eleteOneRegister(characterId)
    .then((response) => {
      
        res.redirect(`characters/list`); 
    })
    .catch(error => console.log(error));
});



module.exports = router;