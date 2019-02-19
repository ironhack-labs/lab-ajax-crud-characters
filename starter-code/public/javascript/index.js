const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => 
{
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
    console.log(charactersAPI);
  }

  document.getElementById('fetch-one').onclick = function(){
    charactersAPI.getOneRegister();
    console.log(charactersAPI);
  }

  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault();

    let id = document.getElementById('edit-id').value
    let name = document.getElementById('nuevo-name').value
    let occupation = document.getElementById('nuevo-occupation').value
    let weapon = document.getElementById('nuevo-weapon').value
    let cartoon = document.getElementById('nuevo-cartoon').value

    var description = {
      id:           id,
      name:         name,
      occupation:   occupation,
      weapon:       weapon,
      cartoon:      cartoon
    };

    console.log(description)
    charactersAPI.createOneRegister(description);
    console.log(charactersAPI);             
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault();

    let id = document.getElementById('edit-id').value
    let name = document.getElementById('edit-name').value
    let occupation = document.getElementById('edit-occupation').value
    let weapon = document.getElementById('edit-weapon').value
    let cartoon = document.getElementById('edit-cartoon').value

    var type = document.getElementById('edit-id').value;

    var description = {
      id:           id,
      name:         name,
      occupation:   occupation,
      weapon:       weapon,
      cartoon:      cartoon,
    };

    console.log(description);
    charactersAPI.updateOneRegister(type, description);
    console.log(charactersAPI);
  }

  document.getElementById('delete-one').onclick = function(){
    let characterID = document.getElementById('character-id-delete').value
    charactersAPI.deleteOneRegister(characterID);
    console.log(charactersAPI);
  }
})
  