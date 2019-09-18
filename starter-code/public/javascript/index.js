const apiHandler = new APIHandler('https://ih-crud-api.herokuapp.com/characters');
const charactersContainer = document.querySelector(".characters-container");


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (e) {
    e.preventDefault();
    getAllCharacters();
  });

  document.getElementById('fetch-one').addEventListener('click', function (e) {
    e.preventDefault();
    const id = document.querySelector('#charId').value;
    apiHandler.getOneRegister(id)
      .then( (character) => {
        const { data } = character;
        charactersContainer.innerHTML = '';
        charactersContainer.innerHTML += `
        <div class="character-info">
          <div class="name">Name: ${data.name}</div>
          <div class="occupation">Occupation: ${data.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${data.debt}</div>
          <div class="weapon">Weapon: ${data.weapon}</div>
        </div>`;
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (e) {
    e.preventDefault();
    const id = document.querySelector('#charId').value;
    apiHandler.deleteOneRegister(id)
      .then( () => getAllCharacters())
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const id = document.querySelector('#idUpdate').value;
    const name = document.querySelector('#nameUpdate').value;
    const weapon = document.querySelector('#weaponUpdate').value;
    const occupation = document.querySelector('#occupationUpdate').value;
    const cartoon = document.querySelector('#cartoonUpdate').checked;
    console.log(document.querySelector('#cartoonUpdate').checked)
    apiHandler.updateOneRegister(id, { name, weapon, occupation, debt: cartoon })
      .then( () => getAllCharacters())
  });

  document.getElementById('new-character-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.querySelector('#nameChar').value;
    const weapon = document.querySelector('#weaponChar').value;
    const occupation = document.querySelector('#occupationChar').value;
    const cartoon = document.querySelector('#cartoonChar').checked;
    console.log(document.querySelector('#cartoonChar').checked)
    apiHandler.createOneRegister({ name, weapon, occupation, debt: cartoon })
      .then( () => getAllCharacters())
    
  });
});

function getAllCharacters () {
  apiHandler.getFullList()
    .then( characters => {
      const { data } = characters;
      charactersContainer.innerHTML = '';
      data.forEach(character => {
        charactersContainer.innerHTML += `
        <div class="character-info">
          <div class="name">Name: <span>${character.name}</span></div>
          <div class="occupation">Occupation: <span>${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon? <span>${character.debt}</span></div>
          <div class="weapon">Weapon: <span>${character.weapon}</span></div>
        </div>`
      })
    })
}
