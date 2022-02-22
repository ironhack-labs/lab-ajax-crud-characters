const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    const resFromApi = charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const fetchOneId = document.getElementsByName('character-id')[0].value;
    const resFromApi = charactersAPI.getOneRegister(fetchOneId);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const deleteOneId = document.getElementsByName('character-id-delete')[0].value;
    charactersAPI.deleteOneRegister(deleteOneId);
  });

  document.getElementById('send-data').addEventListener('click', function (event) {
    const editForm = document.getElementById('edit-character-form');
    const [ id, name, occupation, weapon, checkbox ] = editForm.getElementsByTagName('input');
    charactersAPI.updateOneRegister(id.value, {
      name: name.value,
      occupation: occupation.value,
      cartoon: checkbox.checked,
      weapon: weapon.value
    });
  });

  document.getElementById('create-data').addEventListener('click', function (event) {
    const newForm = document.getElementById('new-character-form');
    const [ name, occupation, weapon, checkbox ] = newForm.getElementsByTagName('input');
    console.log(newForm);
    charactersAPI.createOneRegister({
      name: name.value,
      occupation: occupation.value,
      cartoon: checkbox.checked,
      weapon: weapon.value
    });
  });
});
