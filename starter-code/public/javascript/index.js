const charactersAPI = new APIHandler('https://ih-crud-api.herokuapp.com/characters');
const charactersContainer = document.querySelector('.characters-container');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    printAllCharacters();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector('#character-id').value;
    charactersAPI.deleteOneRegister(id).then((res) => {
      const { data } = res;
      charactersContainer.innerHTML = '';
      charactersContainer.innerHTML += `
        <div class="character-info">
        <div class="id">${data.id}</div>
        <div class="name">${data.name}</div>
        <div class="occupation">${data.occupation}</div>
        <div class="cartoon">${data.debt}</div>
        <div class="weapon">${data.weapon}</div>
        </div>
      `;
    });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector('#delete-id').value;
    charactersAPI.deleteOneRegister(id).then(() => {
      printAllCharacters();
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.querySelector('#char-id-update').value;
    const name = document.querySelector('#char-name-update').value;
    const occupation = document.querySelector('#char-occupation-update').value;
    const weapon = document.querySelector('#char-weapon-update').value;
    const debt = document.querySelector('#char-cartoon-update').checked;

    charactersAPI.updateOneRegister(id, { name, occupation, debt, weapon })
      .then(() => {
        printAllCharacters();
      })
      .catch(error => console.error(error));
  });


  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#char-name').value;
    const occupation = document.querySelector('#char-occupation').value;
    const weapon = document.querySelector('#char-weapon').value;
    const debt = document.querySelector('#char-cartoon').checked;

    charactersAPI.createOneRegister({ name, occupation, debt, weapon })
      .then(() => {
        printAllCharacters();
      })
      .catch(error => console.error(error));
  });
});

const printAllCharacters = () => {
  charactersAPI.getFullList().then((res) => {
    const { data } = res;
    charactersContainer.innerHTML = '';
    data.forEach((character) => {
      charactersContainer.innerHTML += `
        <div class="character-info">
        <div class="id">${character.id}</div>
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.debt}</div>
        <div class="weapon">${character.weapon}</div>
        </div>
      `;
    });
  });
};

