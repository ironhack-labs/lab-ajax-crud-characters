const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  const buildCharacterBox = (character) => {
    const newElement = `
      <div class="character-info">
          <div class="name">${character.name} - id ${character.id}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Character Weapon: ${character.weapon}</div>
        </div>
    `;

    document.querySelector('.characters-container').innerHTML += newElement;
  };
  const fetchAll = () => {
    document.querySelector('.characters-container').innerHTML = '';
    charactersAPI.getFullList().then((result) => {
      result.forEach((element) => {
        buildCharacterBox(element);
      });
    });
  };

  fetchAll();

  document.getElementById('fetch-all').addEventListener('click', (event) => {
    fetchAll();
  });

  document.getElementById('fetch-one').addEventListener('click', (event) => {
    document.querySelector('.characters-container').innerHTML = '';
    const id = document.querySelector('input[name="character-id"]').value;
    charactersAPI.getOneRegister(id).then((result) => {
      buildCharacterBox(result);
    });
  });

  document.getElementById('delete-one').addEventListener('click', (event) => {
    event.preventDefault();
    const id = document.querySelector('input[name="character-id-delete"]').value;
    charactersAPI.deleteOneRegister(id).then(() => {
      const button = document.querySelector('#delete-one');
      fetchAll();
      button.className = 'active';
    });
  });

  document.getElementById('edit-character-form').addEventListener('submit', (event) => {
    
    event.preventDefault();

    const id = document.querySelector('#edit-character-form input[name="chr-id"]').value;
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    const name = document.querySelector('#edit-character-form input[name="name"]').value;
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;


    const updatedCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    charactersAPI.updateOneRegister(id, updatedCharacter).then(() => {});
  });

  document.getElementById('new-character-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    const name = document.querySelector('#new-character-form input[name="name"]').value;
    const weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked;

    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon,
    };

    charactersAPI.createOneRegister(newCharacter).then((result) => {
      console.log(result);
    });
  });
});