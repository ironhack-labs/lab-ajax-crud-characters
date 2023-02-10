
const ApiService = require('../public/javascript/api.services')
const apiService = new ApiService('http://localhost:8000')

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
   apiService
   .getAllCharacters()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    router.get("/characters/:id", (req,res) =>{
      const { characterId } = req.params
  
      apiService
      .getOneCharacter(characterId)
      .then(response =>{
          res.json(response.data)
      })
      .catch(err => console.log(err))
  })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
