
const ApiService = require('../public/javascript/api.services');
 const apiService = new ApiService('http://localhost:8000')

 
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    router.get('Characters',(req,res)=>{
      apiService
      .getAllCharacters()
      .then((response)=>{
        res.json(response.data);
      })
      .cath(err,console.log(err))
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
router.get("/charactes/:id",(req,res)=>{
  const{characterId}=req.params

  .apiService
  .getOneCharacter(characterId)
  .then(response=>{
      res.send("Character has been successfully deleted")
  })
  .cath(res.send('Charecter not found'))
})
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    router.delete('/characters/delete/:id', (req, res) => {
    const {characterId } = req.params

    apiService
    .deleteCharacter(characterId)
    .then(response => res.redirect('characters has been succesfully delate'))
    .catch(res.send('Character not found'));
  //res.send(`Here we'll delete character with ID ${req.params.id}`);
});
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    router.put('/characters/:id',(req,res)=>{
      const {characterId}=req.params
      const {name,occupation,cartoon,weapon}=req.body

      apiService
      .editCharacter(characyerId,{name,occupation,cartoon, weapon})
      .then(response=>{
        res.json(response.data)
      })
      .catch(res.send('Character not found'))
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
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
  });
});
