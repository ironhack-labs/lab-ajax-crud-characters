const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', () => {

    charactersAPI.getFullList();

  });

  document.getElementById('fetch-one').addEventListener('click', (event) => {

    const characterId = Number(event.path[1].children[1].value);
    charactersAPI.getOneRegister(characterId);

  });

  document.getElementById('delete-one').addEventListener('click', (event) => {

    const characterId = Number(event.path[1].children[1].value);
    charactersAPI.deleteOneRegister(characterId);

  });

  document.getElementById('edit-character-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const id = document.getElementById('idEdit').value;
    const name = document.getElementById('nameEdit').value;
    const occupation = document.getElementById('occupationEdit').value;
    const weapon = document.getElementById('weaponEdit').value;
    const cartoon = document.getElementById('cartoonEdit').value;

    const updatedCharacter = {
      id,
      name,
      occupation,
      weapon,
      cartoon
    };

    charactersAPI.updateOneRegister(id, updatedCharacter);

  });

  document.getElementById('new-character-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('nameInput').value;
    const occupation = document.getElementById('occupationInput').value;
    const weapon = document.getElementById('weaponInput').value;
    const cartoon = document.getElementById('cartoonInput').value;

    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    };

    charactersAPI.createOneRegister(newCharacter);
  });
});
