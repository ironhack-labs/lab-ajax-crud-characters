const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister(document.getElementsByName("character-id")[0].value);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI. deleteOneRegister(document.getElementsByName("character-id-delete")[0].value);
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const id = document.getElementsByName('chr-id')[0].value;
    const name = document.getElementById('update-name').value;
    const occupation = document.getElementById('update-occupation').value;
    const weapon = document.getElementById('update-weapon').value;
    const cartoon =  document.getElementById('update-cartoon').checked;
    const updateCharacterInfo = {
      id,
      name,
      occupation,
      weapon,
      cartoon
    };
    console.log('Update character: ', updateCharacterInfo);
    charactersAPI.updateOneRegister(updateCharacterInfo, id);
    document.getElementById('edit-character-form').reset();


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const occupation = document.getElementsByName('occupation')[0].value;
    const weapon = document.getElementsByName('weapon')[0].value;
    const cartoon =  document.getElementsByName('cartoon')[0].checked;

    const newCharacterInfo = {
      name,
      occupation,
      weapon,
      cartoon
    };

    console.log('New character: ', newCharacterInfo);
    charactersAPI.createOneRegister(newCharacterInfo);
    document.getElementById('new-character-form').reset();

  });
});