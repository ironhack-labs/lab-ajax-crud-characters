const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  const reset = () => {
    $(".character-info").empty();
  }

  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(data => {
      reset();
      data.forEach(e => {
        let container = $("<div class='character-info'>");
        let name = `<div class="name">Character Name: ${e.name}</div>`;
        let occupation = `<div class="occupation">Character Occupation: ${
          e.occupation
        }</div>`;
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
    let id = $("#character-id").val();

    charactersAPI.getOneRegister(id)
    .then(data => {
      reset();
      let container = $("<div class='character-info'>");
      let name = `<div class="name">Character Name: ${data.name}</div>`;
      let occupation = `<div class="occupation">Character Occupation: ${
        data.occupation
      }</div>`;
      let cartoon = `<div class="cartoon">Is a Cartoon? ${data.cartoon}</div>`;
      let weapon = `<div class="weapon">Character Weapon: ${data.weapon}</div>`;
      container.append(name);
      container.append(occupation);
      container.append(cartoon);
      container.append(weapon);
      $(".characters-container").append(container);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    let deleteButton = $("#delete-one");
    let id = $("#character-id-delete").val();

    charactersAPI.deleteOneRegister(id)
    .then( () => {
      reset();
      deleteButton.css("background", "green");
    })
    .catch( () => {
      deleteButton.css("background", "red");
    })
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    
  };

  document.getElementById("new-character-form").onsubmit = function() {};
});
