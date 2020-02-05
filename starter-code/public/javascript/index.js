import APIHandler from './APIHandler.js'
const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.body.querySelector(".characters-container");
const btnFetchAll = document.getElementById('fetch-all');
const btnFetchOne = document.getElementById('fetch-one');
const btnDeleteOne = document.getElementById('delete-one');

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

btnFetchAll.addEventListener('click', function (event) {

  charactersAPI.getAll()
    .then(response => {
      response.data.forEach(character => {
        generateCharacter(character)
      })
    })

});

btnFetchOne.addEventListener('click', function (event) {

  const charId = parseInt(document.getElementById('fetch-one-input').value, 10);

  charactersAPI.getOne(charId)
    .then(response => {
      btnFetchOne.classList.remove('error');
      clearCharactersContainer();
      generateCharacter(response.data)
    }).catch(err => {
      console.log(err);
      btnFetchOne.classList.add('error');
    })

});

btnDeleteOne.addEventListener('click', function (event) {
  const charId = parseInt(document.getElementById('delete-one-input').value, 10);
  charactersAPI.deleteOne(charId)
    .then(response => {
      console.log("Successfuly deleted char id : ", charId);
      btnDeleteOne.classList.remove('error');
    }).catch(err => {
      console.log(err);
      btnDeleteOne.classList.add('error');
    })
});

document.getElementById('edit-character-form').addEventListener('submit', function (event) {

});

document.getElementById('new-character-form').addEventListener('submit', function (event) {

});
