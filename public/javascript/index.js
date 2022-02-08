const charactersAPI = new APIHandler('http://localhost:8000');
const charContainer = document.querySelector('.characters-container');
const idSearchForm = document.querySelector('input[name="character-id"]');
const idDeleteForm = document.querySelector('input[name="character-id-delete"]');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
charactersAPI.getFullList()
.then(characterList => {

  let characterCard = "";
  characterList.data.forEach(character => {
characterCard += `
<div class="character-info">
<div class="name">${character.name}</div>
<div class="occupation">${character.occupation}</div>
<div class="cartoon">${character.cartoon}</div>
<div class="weapon">${character.weapon}</div>
</div>
`
  })
  charContainer.innerHTML = characterCard;
})
.catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
charactersAPI.
getOneRegister(idSearchForm.value)
.then(character => {
  let characterCard = `
  <div class="character-info">
  <div class="name">${character.data.name}</div>
  <div class="occupation">${character.data.occupation}</div>
  <div class="cartoon">${character.data.cartoon}</div>
  <div class="weapon">${character.data.weapon}</div>
  </div>
  `;
  charContainer.innerHTML = characterCard;
})
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
