const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList();
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    
    let idToSearch = document.getElementById('character-to-fetch').value;
    console.log(idToSearch)
    charactersAPI.getOneRegister(idToSearch);
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault();
    let idToDelete = document.getElementById('character-to-delete').value;
    charactersAPI.deleteOneRegister(idToDelete);

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let id = document.getElementById('edit-character-form').getElementsByTagName('input')[0].value;
    let name = document.getElementById('edit-character-form').getElementsByTagName('input')[1].value;
    let occupation = document.getElementById('edit-character-form').getElementsByTagName('input')[2].value;
    let weapon = document.getElementById('edit-character-form').getElementsByTagName('input')[3].value;
    let cartoon = false;
    
    if (document.getElementById('edit-character-form').getElementsByTagName('input')[4].checked) {
      cartoon = true;
    }
    

    let updatedCharacter = {id, name, occupation, weapon, cartoon};

    console.log(updatedCharacter);
    
    charactersAPI.updateOneRegister(updatedCharacter);

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault();

    let name = document.getElementById('new-character-form').getElementsByTagName('input')[0].value;
    let occupation = document.getElementById('new-character-form').getElementsByTagName('input')[1].value;
    let weapon = document.getElementById('new-character-form').getElementsByTagName('input')[2].value;
    let cartoon = false;
    
    if (document.getElementById('new-character-form').getElementsByTagName('input')[3].checked) {
      cartoon = true;
    }
    

    let newCharacter = {name, occupation, weapon, cartoon};

    charactersAPI.createOneRegister(newCharacter);



  });
});
