const charactersAPI = new APIHandler('http://localhost:8000');

const charactersContainer = document.querySelector('.characters-container');


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    const list = await charactersAPI.getFullList();
    fullList(list);
  });

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const input = document.querySelector('.operation input')
    const id = input.value;
    
    const oneCharacter = await charactersAPI.getOneRegister(id);
    
    charactersContainer.innerHTML = `
      <div class="character-info">
        <div class="name">Character Name: ${oneCharacter.name}</div>
        <div class="occupation">Character Occupation: ${oneCharacter.occupation}</div>
        <div class="cartoon">Is a Cartoon? ${oneCharacter.cartoon ? 'Yes' : 'No' }</div>
        <div class="weapon">Character Weapon: ${oneCharacter.weapon}</div>
      </div>`;
    
    input.value = '';
  });
  
  document.getElementById('delete-one').addEventListener('click', async function (event) {
    const input = document.querySelector('.delete input');
    const id = input.value;
       
    const deleteCharacter = await charactersAPI.deleteOneRegister(id);
    
    const list = await charactersAPI.getFullList();
    fullList(list);

    input.value = '';
  });
  
  document.getElementById('edit-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const form = document.getElementById('edit-character-form')
    
    const id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
    const name = document.querySelector('#edit-character-form input[name="name"]').value;
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;
    
    const editedCharacter = {
      id: id,
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };
    
    await charactersAPI.updateOneRegister(id, editedCharacter);
    
    const list = await charactersAPI.getFullList();
    fullList(list);

    form.reset();
  });

  document.getElementById('new-character-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const form = document.getElementById('new-character-form');

    const name = document.querySelector('#new-character-form input[name="name"]').value;
    const occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked;

    const newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    };
    
    await charactersAPI.createOneRegister(newCharacter);

    const list = await charactersAPI.getFullList();
    fullList(list);
   
    form.reset();
  });

});

function fullList(array) {
    charactersContainer.innerHTML = '';

    array.forEach(character => {
      charactersContainer.innerHTML += `
        <div class="character-info">
          <div class="name">Character Name: ${character.name}</div>
          <div class="occupation">Character Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon? ${character.cartoon ? 'Yes' : 'No' }</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>`;
    })
  }
