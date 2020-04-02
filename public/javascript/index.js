const charactersAPI = new APIHandler('http://localhost:8000');


window.addEventListener('load', (event) => {
  event.preventDefault()
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();

    charactersAPI
      .getFullList()
      .then(response => {
        let data = response.data;
        let container = document.querySelector('.characters-container');
        let content = '';
        data.map((character) => {
          const {id, name, occupation, weapon, cartoon} = character;
          content += `<div class="character-info">
          <div class="id">Id: ${id}</div>
          <div class="name">Name: ${name}</div>
          <div class="occupation">Occupation: ${occupation}</div>
          <div class="cartoon">Cartoon: ${cartoon}</div>
          <div class="weapon">Weapon: ${weapon}</div>
        </div>`
        });
        container.innerHTML = content;
        console.log(data);
      })
      .catch(error => console.log(error))
  });


  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    const characterId = document.querySelector('.operation input[name="character-id"]').value;

    charactersAPI
      .getOneRegister(characterId)
      .then((response) => {
        let data = response.data;
        let container = document.querySelector('.characters-container');
        let content = '';
          const {id, name, occupation, weapon, cartoon} = data;
          content += `<div class="character-info">
          <div class="id">Id: ${id}</div>
          <div class="name">Name: ${name}</div>
          <div class="occupation">Occupation: ${occupation}</div>
          <div class="cartoon">Cartoon: ${cartoon}</div>
          <div class="weapon">Weapon: ${weapon}</div>
        </div>`
        container.innerHTML = content;
        console.log(data);
      })
      .catch(error => console.log(error))
  });


  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    const characterId = document.querySelector('.delete input').value;

    charactersAPI
      .deleteOneRegister(characterId)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  });


  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const characterName = document.querySelector('#new-character-form input[name="name"]').value;
    const characterOccupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    const characterWeapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    const isACartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked;
    console.log(characterName, characterOccupation, characterWeapon, isACartoon)
    
    charactersAPI
      .createOneRegister(characterName, characterOccupation, characterWeapon, isACartoon)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  });
});


  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
    const name = document.querySelector('#edit-character-form input[name="name"]').value;
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;

    charactersAPI
      .updateOneRegister(id, name, occupation, weapon, cartoon)
      .then(response => console.log(response))
      .catch(error = console.log(error))
  });