const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    $(".characters-container").empty();
    charactersAPI.getFullList().then(data => {
      data.forEach(character => {
        let charBox = $("<div class='character-info'>");
        let name = `<div class="name">Character Name: ${character.name}</div>`;
        let occupation = `<div class="occupation">Character Occupation: ${
          character.occupation
        }</div>`;
        let cartoon = `<div class="cartoon">Is a Cartoon? ${
          character.cartoon
        }</div>`;
        let weapon = `<div class="weapon">Character Weapon: ${
          character.weapon
        }</div>`;
        charBox.append(name);
        charBox.append(occupation);
        charBox.append(cartoon);
        charBox.append(weapon);
        $(".characters-container").append(charBox);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    $(".characters-container").empty();
    let id = $("#character-id").val();
    charactersAPI.getOneRegister(id).then(character => {
      let charBox = $("<div class='character-info'>");
      let name = `<div class="name">Character Name: ${character.name}</div>`;
      let occupation = `<div class="occupation">Character Occupation: ${
        character.occupation
      }</div>`;
      let cartoon = `<div class="cartoon">Is a Cartoon? ${
        character.cartoon
      }</div>`;
      let weapon = `<div class="weapon">Character Weapon: ${
        character.weapon
      }</div>`;
      charBox.append(name);
      charBox.append(occupation);
      charBox.append(cartoon);
      charBox.append(weapon);
      $(".characters-container").append(charBox);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = $("#character-id-delete").val();

    charactersAPI
      .deleteOneRegister(id)
      .then(() => {
        $(".characters-container").empty();
      })
      .catch(() => console.log("Sorry, couldnt be deleted"));
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    charactersAPI.createOneRegister(characterData)
  };

  document.getElementById("new-character-form").onsubmit = function() {
    charactersAPI.updateOneRegister(id, characterData)
  };
});
