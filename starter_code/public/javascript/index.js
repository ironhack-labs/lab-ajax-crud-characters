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

  document.getElementById("delete-one").onclick = function() {
    let idDelete = $("#delete-id").val();
     charactersAPI.deleteOneRegister(idDelete)
     .then( () =>
       $("#delete-one").css("background", "green")
     )
     .catch( () =>
      $("#delete-one").css("background", "red")
     )
  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {
    let name = $("#nom").val();
    let occupation = $("#occup").val();
    let weapon = $("#weap").val();
    let cartoon = document.getElementById("cart").checked;
    charactersAPI.createOneRegister({name, occupation, weapon, cartoon})
    .then( () =>
       $("#send-data").css("background", "green")
     )
     .catch( () =>
      $("#send-data").css("background", "red")
     )
  };
});
