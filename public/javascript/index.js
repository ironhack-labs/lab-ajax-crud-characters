const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.getOneRegister(document.getElementsByName('character-id')[0].value)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    charactersAPI.deleteOneRegister(document.getElementsByName('character-id-delete')[0].value)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementsByName('chr-id')[0].value;
    const name = document.getElementsByName('name')[1].value;
    const occupation = document.getElementsByName('occupation')[1].value;
    const weapon = document.getElementsByName('weapon')[1].value;
    const cartoon = document.getElementsByName('cartoon')[1].checked;

    const updatedInfo = {
      id,
      name,
      occupation,
      weapon,
      cartoon
    }
    charactersAPI.updateOneRegister(id, updatedInfo);
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon = document.getElementsByName('cartoon')[0].checked;

    const createCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: cartoon
    }
    charactersAPI.createOneRegister(createCharacter);
  });
});