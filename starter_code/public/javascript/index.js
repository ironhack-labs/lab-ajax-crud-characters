const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(response => {
      $(".characters-container").empty();
      for (let i = 0; i < response.length; i++) {
        console.log(response[i]);
        $(".characters-container").append(
          `<div class= "character-info">
          <div class= "name"> Character Name: ${response[i].name}</div>
          <div class = "occupation"> Character Occupation: ${
            response[i].occupation
          }</div>
          <div class = "debt"> Character Debt: ${response[i].debt}</div>
          <div class = "weapon">Character Weapon: ${response[i].weapon}</div>`
        );
      }

      console.log(response.data);
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    const id = document.getElementById("character-id").value;
    charactersAPI.getOneRegister(id).then(response => {
      console.log(response.data);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = document.getElementById("delete").value;
    charactersAPI.deleteOneRegister(id).then(response => {
      console.log("yes!");
    });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    charactersAPI
      .updateOneRegister({
        name: document.getElementById("edname").value,
        occupation: document.getElementById("edoccupation").value,
        weapon: document.getElementById("edweapon").value,
        debt: document.getElementById("eddebt").value
      })
      .then(response => {
        console.log(response);
      });
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    charactersAPI
      .createOneRegister({
        name: document.getElementById("name").value,
        occupation: document.getElementById("occupation").value,
        weapon: document.getElementById("weapon").value,
        debt: document.getElementById("debt").value
      })
      .then(response => {
        console.log(response);
      });
  };
});
