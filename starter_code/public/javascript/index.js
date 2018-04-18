const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(data => {
      data.forEach(e => {
        let container = $("<div class='character-info'>");
        let name = `<div class="name">Character Name: ${e.name}</div>`;
        let occupation = `<div class="occupation">Character Occupation: ${e.occupation}</div>`;
        let cartoon = `<div class="cartoon">Is a Cartoon? ${e.cartoon}</div>`;
        let weapon = `<div class="weapon">Character Weapon: ${e.weapon}</div>`;
        container.append(name);
        container.append(occupation);
        container.append(cartoon);
        container.append(weapon);
        $(".characters-container").append(container);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = $("#select-id").val();

    charactersAPI.getOneRegister(id)
    .then(data => {
      let container = $("<div class='character-info'>");
      let name = `<div class="name">Character Name: ${data.name}</div>`;
      let occupation = `<div class="occupation">Character Occupation: ${data.occupation}</div>`;
      let cartoon = `<div class="cartoon">Is a Cartoon? ${data.cartoon}</div>`;
      let weapon = `<div class="weapon">Character Weapon: ${data.weapon}</div>`;
      container.append(name);
      container.append(occupation);
      container.append(cartoon);
      container.append(weapon);
      $(".characters-container").append(container);
    });

  };

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
