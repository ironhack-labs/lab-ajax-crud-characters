const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  // START - dom manipulation
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList();
  }

  document.getElementById('fetch-one').onclick = function () {
    let charId = document.getElementById('fetch-one-id').value;
    charactersAPI.getOneRegister(charId);
  }

  document.getElementById('delete-one').onclick = function () {
    let charId = document.getElementById('delete-one-id').value;
    charactersAPI.deleteOneRegister(charId);
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault(); 
    let id = $("#edit-character-form .field input[name='chr-id']")[0].value;
    let name = $("#edit-character-form .field input[name='name']")[0].value;
    let occupation = $("#edit-character-form .field input[name='occupation']")[0].value;
    let weapon = $("#edit-character-form .field input[name='weapon']")[0].value;
    let cartoon = $("#edit-character-form .field input[name='cartoon']")[0].checked;

    let editCharacter = {id, name, occupation, weapon, cartoon}; 
    charactersAPI.updateOneRegister(editCharacter);
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault(); 
    let name = $("#new-character-form .field input[name='name']")[0].value;
    let occupation = $("#new-character-form .field input[name='occupation']")[0].value;
    let weapon = $("#new-character-form .field input[name='weapon']")[0].value;
    let cartoon = $("#new-character-form .field input[name='cartoon']")[0].checked;

    let newCharacter = {name, occupation, weapon, cartoon}; 
    charactersAPI.createOneRegister(newCharacter);
  }
  // END - dom manipulation

  
  // DISPLAY CARD WITH PROVIDED DATA //
  displayOneCharacter = function(item) {
    var content = `
            <div class="characters-container">
              <div class="character-info">
                <div class="id">Id</div>
                <div class="name">Name</div>
                <div class="occupation">Occupation</div>
                <div class="cartoon">Is a Cartoon?</div>
                <div class="weapon">Weapon</div>
              </div>
              <div class="character-data">
                <div class="id">${item.id}</div>
                <div class="name">${item.name}</div>
                <div class="occupation">${item.occupation}</div>
                <div class="cartoon">${item.cartoon}</div>
                <div class="weapon">${item.weapon}</div>
              </div>
            </div>`
            
            $('.characters-container-main').append(content);
  }
})
