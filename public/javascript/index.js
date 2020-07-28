const charactersAPI = new APIHandler('http://localhost:8000');




window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });
  
  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const id = document.getElementsByName('character-id')[0];
    charactersAPI.getOneRegister(id.value)
    
  });
  
  document.getElementById('delete-one').addEventListener('click', function (event) {
    //porque son P**O submits!
    event.preventDefault();
    const deleteId = document.getElementsByName('character-id-delete')[0];
    charactersAPI.deleteOneRegister(deleteId.value);
  });
  
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const editCharacter = {
      id: event.target[0].value,
      name: event.target[1].value,
      occupation: event.target[2].value,
      weapon: event.target[3].value,
      cartoon: event.target[4].checked
    }
    charactersAPI.updateOneRegister(editCharacter);
  });
  
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newCharacter = {
      name: event.target[0].value,
      occupation: event.target[1].value,
      weapon: event.target[2].value,
      cartoon: event.target[3].checked,
    }
    charactersAPI.createOneRegister(newCharacter);
  });
});
