const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(res => {
      const characterInfoDiv = res.data.map(character => {
        return `<div class="character-info">
          <div class="name">Id: ${character.id}</div>
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
        </div>`;
      });
      $(".characters-container").append(characterInfoDiv);
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementById("search-id").value;
    charactersAPI.getOneRegister(id).then(res => {
      const characterOne = `<div class="character-info">
      <div class="name">Name: ${res.data.name}</div>
      <div class="occupation">Occupation: ${res.data.occupation}</div>
      <div class="weapon">Weapon: ${res.data.weapon}</div>
      </div>`;
      $(".characters-container").html(characterOne);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = document.getElementById("delete-id").value;
    charactersAPI
      .deleteOneRegister(id)
      .then(res => {
        $("#delete-one").css("background-color", "green");
      })
      .catch(err => {
        console.log(err);
        $("#delete-one").css("background-color", "red");
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
