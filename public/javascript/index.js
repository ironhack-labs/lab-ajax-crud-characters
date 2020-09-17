
/* 
axios.get('localhost:8000/characters')
.then(data => {
  console.log(data)
})
.catch(err => {
  console.log(err)
}) */

const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
    
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister()
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    charactersAPI.updateOneRegister(id)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister()
  });
});
