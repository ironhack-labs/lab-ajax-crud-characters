const charactersAPI = new APIHandler("http://localhost:8000");

function characterCard(characters) {
  let characterContainer = $(".characters-container");
  characterContainer.html("");
  for (let i = 0; i < characters.length; i++) {
    let { id, name, occupation, cartoon, weapon } = characters[i]
    let html = `<div class="character-info">
      <div class="name"> ${id}: ${name} </div>
      <div class="occupation"> Occupation: ${occupation} </div>
      <div class="cartoon"> Cartoon: ${cartoon}</div>
      <div class="weapon">Weapon: ${weapon}</div>`
    characterContainer.append(html);
  }
}

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function(event) {
    event.preventDefault();
    charactersAPI
      .getFullList()
      .then(characters => {
        characterCard(characters);
      })
      .catch(error => console.log(error));
  };

  document.getElementById("fetch-one").onclick = function(event) {
    event.preventDefault();
    let id = document.getElementsByName("character-id")[0].value;
    charactersAPI
      .getOneRegister(id)
      .then(character => {
        characterCard([character]);
      })
      .catch(error => console.log(error));
  };

  document.getElementById("delete-one").onclick = function(event) {
    event.preventDefault();
    let id = document.getElementsByName("character-id-delete")[0].value;
    charactersAPI
      .deleteOneRegister(id)
      .then(() => $("#delete-one").css("background-color", "green"))
      .catch(() => {
        console.log("Character not found");
        $("#delete-one").css("background-color", "red");
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    let id = $('#edit-character-form input[name|="chr-id"')[0].value;
    let name = $('#edit-character-form input[name|="name"')[0].value;
    let occupation = $('#edit-character-form input[name|="occupation"')[0]
      .value;
    let weapon = $('#edit-character-form input[name|="weapon"')[0].value;
    let cartoon = $('#edit-character-form input[name|="cartoon"')[0].checked;
    charactersAPI
      .updateOneRegister({ id, name, occupation, weapon, cartoon })
      .then(() => $("#update-data").css("background-color", "green"))
      .catch(error => {
        $("#update-data").css("background-color", "red");
        console.log(error);
      });
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    let name = $('#new-character-form input[name|="name"')[0].value;
    let occupation = $('#new-character-form input[name|="occupation"')[0].value;
    let weapon = $('#new-character-form input[name|="weapon"')[0].value;
    let cartoon = $('#new-character-form input[name|="cartoon"')[0].checked;
    charactersAPI
      .createOneRegister({ name, occupation, weapon, cartoon })
      .then(() => $("#send-data").css("background-color", "green"))
      .catch(error => {
        $("#send-data").css("background-color", "red");
        console.log(error);
      });
  };
});
