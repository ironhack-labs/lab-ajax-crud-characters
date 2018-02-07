const charactersAPI = new APIHandler("http://localhost:8000");

const charactersInfo = {
  name: String,
  occupation: String,
  debt: Boolean,
  weapon: String
};

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(res => {
      $(".characters-container").empty();

      res.forEach(element => {
        $(".characters-container").append(
          `<div class="character-info">
          <div class="id">Id : ${element.id}</div>
          <div class="name">Character Name : ${element.name}</div>
          <div class="occupation">Character Occupation : ${
            element.occupation
          }</div>
          <div class="debt">Character Debt : ${element.debt}</div> 
          <div class="weapon">Character Weapon :  ${element.weapon}</div>
          </div>`
        );
      });
    });
  };

  // struggle to access the value of the object send generate after the promise, so can't display anything on the HTML
  document.getElementById("fetch-one").onclick = function() {
    let id = $("#fetch-id").val();
    console.log(charactersAPI.getOneRegister(id));

    charactersAPI.getOneRegister(id).then(
      res => {
        //$(".characters-container").empty();
        $(".characters-container").append(
          `<div class="character-info">
          <div class="name">Character Name : ${this.name}</div>
          <div class="occupation">Character Occupation : ${
            this.occupation
          }</div>
          <div class="debt">Character Debt : ${this.debt}</div>
          <div class="weapon">Character Weapon : ${this.weapon}</div>
          </div>`
        );
      }
      //});
    );
  };

  document.getElementById("delete-one").onclick = function() {
    let id = $("#delete").val();
    charactersAPI.deleteOneRegister(id).then(res => {
      document.getElementById("delete-one").style.backgroundColor = "green";
    });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    const charactersInfo = {
      name: document.getElementById("edit-name").value,
      occupation: document.getElementById("edit-occupation").value,
      debt: document.getElementById("edit-debt").value,
      weapon: document.getElementById("edit-weapon").value
    };
    console.log(charactersInfo);
    const charId = document.getElementById("chr-id").value;
    console.log(charId);
    charactersAPI.updateOneRegister(charId, charactersInfo);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();

    const charactersInfo = {
      name: document.getElementById("create-name").value,
      occupation: document.getElementById("create-occupation").value,
      debt: $("create-debt").is(":checked"),
      weapon: document.getElementById("create-weapon").value
    };

    charactersAPI.createOneRegister(charactersInfo).then(res => {
      $(".new-character-form").empty();
    });
  };
});
