import APIHandler from './APIHandler.js'
const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.body.querySelector(".characters-container");

function clearCharactersContainer() {
  charactersContainer.innerHTML = '';
}

function generateCharacter(character) {
  const template = `
  <div class="character-info">
    <div class="id"><span>ID : </span>${character.id}</div>
    <div class="name"><span>Nom : </span>${character.name}</div>
    <div class="occupation"><span>Occupation : </span>${character.occupation}</div>
    <div class="cartoon"><span>Is a Cartoon ? : </span>${character.cartoon}</div>
    <div class="weapon"><span>Weapon : </span>${character.weapon}</div>
  </div>`;
  charactersContainer.innerHTML += template;
}

document.getElementById('fetch-all').addEventListener('click', function (event) {
  charactersAPI.getAll()
    .then(response => {
      response.data.forEach(character => {
        generateCharacter(character)
      })
    })
});

document.getElementById('fetch-one').addEventListener('click', function (event) {
  const charId = parseInt(document.getElementById('fetch-one-input').value, 10);
  charactersAPI.getOne(charId)
    .then(response => {
      clearCharactersContainer();
      generateCharacter(response.data)
    }).catch(err => console.log(err))
});

document.getElementById('delete-one').addEventListener('click', function (event) {

});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});
