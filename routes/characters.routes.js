// routes/movie-characters.routes.js

const ApiService = require('../public/javascript/api.services');
const apiService = new ApiService();

// List all the characters from the API.
router.get('Characters',(req,res)=>{
    apiService
    .getAllCharacters()
    .then((response)=>{
      res.json(response.data);
    })
    .cath(err,console.log(err))
  });

router.get('/characters/:id', (req, res) => {
    const characterId=req.params

    apiService
    .getOneCharacter(characterId)
    .then(response=>{
          //  res.json(response.data)
            res.json(response.data)
    })
    .catch(err=>console.log(err))
});

router.post('/characters',(req,res)=>{
    const {name, occupation, cartoon,weapon}=req.body

    if(name!==""||occupation!==""|| cartoon!==""||weapon!==""){
    return console.log('There are some wrong')
    }
        
    apiService
    .createCharacter({name, occupation, cartoon,weapon})
    .then(response=>{
        res.json(response.data)
    })
    .catch((error) => console.log(error));
    
})

router.put('/character/:id',(req,res)=>{
    const {characterId}=req.params;
    const {name, occupation, cartoon,weapon}=req.body;

        apiService
        .editCharacter(characterId,{name, occupation, cartoon,weapon})
    .then(response=>{
        res.json(response.data)
    })
    .catch(res.send("caracter no encontrado"));
})

router.delete('/characters/delete/:id', (req, res) => {
    const {characterId } = req.params

    apiService
    .deleteCharacter(characterId)
    .then(response => res.redirect('characters has been succesfully delate'))
    .catch(res.send('Character not found'));
  //res.send(`Here we'll delete character with ID ${req.params.id}`);
});
