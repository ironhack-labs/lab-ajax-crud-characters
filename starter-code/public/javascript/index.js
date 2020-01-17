const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const fullList = await charactersAPI.getFullList();
    // console.log(fullList);
    let container = document.querySelector('.characters-container');
    container.innerHTML = '';
    fullList.forEach(character => {
      container.innerHTML += `
      <div class="character-info">
        <div class="name">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>
      `;
    });
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const theId = document.querySelector('.operation input[name="character-id"]').value;

    if (theId){
      const character = await charactersAPI.updateOneRegister(theId);
      // console.log(character);
      let container = document.querySelector('.characters-container');
      container.innerHTML = `
      <div class="character-info">
        <div class="name">Id: ${character.id}</div>
        <div class="name">Name: ${character.name}</div>
        <div class="occupation">Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${character.cartoon}</div>
        <div class="weapon">Weapon: ${character.weapon}</div>
      </div>
      `;
    }
  });

  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const theInput = document.querySelector('.operation input[name="character-id-delete"]');
    const theId = theInput.value;

    if (theId){
      const isDeleted = await charactersAPI.deleteOneRegister(theId);
      // console.log(isDeleted);
      let button = document.querySelector('#delete-one');
      if (isDeleted) {
        button.setAttribute("style", "background: green;");
      } else {
        button.setAttribute("style", "background: red;");
      }
    }

  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    // { name: 'Batman', occupation: 'hero', cartoon: true, weapon: 'A lot' }
    // { name: 'Robin', occupation: 'hero', cartoon: true, weapon: 'some' }
    event.preventDefault();

    const name = document.querySelector('#new-character-form input[name="name"]').value;
    const occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked;
    
    if (name && occupation && weapon){

      const characterInfo = {
        name,
        occupation,
        weapon,
        cartoon
      };

      // console.log(characterInfo);
      let button = document.querySelector('#new-character-form #send-data');
      const newChar = await charactersAPI.createOneRegister(characterInfo);
      if (newChar) {
        button.setAttribute("style", "background: green;");
      } else {
        button.setAttribute("style", "background: red;");
      }
      document.querySelector("#new-character-form").reset();
    }

  });

  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const theId = document.querySelector('#edit-character-form input[name="chr-id"]').value;
    const name = document.querySelector('#edit-character-form input[name="name"]').value;
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;
    
    if (theId && name && occupation && weapon){

      const characterInfo = {
        name,
        occupation,
        weapon,
        cartoon
      };

      // console.log(characterInfo);
      let button = document.querySelector('#edit-character-form #send-data');
      const response = await charactersAPI.updateOneRegister(theId, characterInfo);
      if (response) {
        button.setAttribute("style", "background: green;");
      } else {
        button.setAttribute("style", "background: red;");
      }
      document.querySelector("#edit-character-form").reset();
    }
  });
});
