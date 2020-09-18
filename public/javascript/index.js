
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
    let id = document.getElementById('search-id').value
    charactersAPI.getOneRegister(id)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    let id = document.getElementById('delete-id').value
    charactersAPI.deleteOneRegister(id)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    charactersAPI.updateOneRegister(id)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value
    const occupation = document.getElementById('occupation').value
    const weapon = document.getElementById('weapon').value
    const cartoon = document.getElementById('cartoon').value
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
  });
});
