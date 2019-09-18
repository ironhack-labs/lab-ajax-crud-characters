const apiHandler = new APIHandler('https://ih-crud-api.herokuapp.com/characters');
const charactersContainer = document.querySelector('.characters-container');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    printFullList();
});

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.querySelector('#character-id').value;
    apiHandler.getOneRegister(id).then((res) => {
    const { data } = res;
    charactersContainer.innerHTML = '';
    charactersContainer.innerHTML += `
        <div class="character-info">
          <div class="name">${data.name}</div>
          <div class="occupation">${data.occupation}</div>
          <div class="cartoon">Is a Cartoon?</div>
          <div class="weapon">${data.weapon}</div>
        </div>`; 
  });
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector('#delete-id').value;
    apiHandler.deleteOneRegister(id)
    .then(() => {
      printFullList();
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#char-update-name').value;
    const weapon = document.querySelector('#char-update-weapon').value;
    const occupation = document.querySelector('#char-update-occupation').value;
    const id = document.querySelector('#char-update-id').value;
    apiHandler.updateOneRegister(id, { name, weapon, occupation })
      .then(() => {
        printFullList();
      })
      .catch(error => console.error(error));
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.querySelector('#char-name').value;
    const occupation = document.querySelector('#char-occupation').value;
    const weapon = document.querySelector('#char-weapon').value;
    apiHandler.createOneRegister({ name, weapon, occupation })
      .then(() => {
        printFullList();
      })
      .catch(error => console.error(error));
  });

  const printFullList = () => {
    apiHandler.getFullList().then((res) => {
      const { data } = res;
      console.log(data)
      charactersContainer.innerHTML = '';
      data.forEach((character) => {
      charactersContainer.innerHTML += `
        <div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?</div>
          <div class="weapon">${character.weapon}</div>
        </div>`; 
      });
  });
  }  
});
