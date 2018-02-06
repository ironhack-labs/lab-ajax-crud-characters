const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(characters => {
      // document.getElementById("character-info").innerHTML = characters.map(char => char.name);
      $("#character-container").html("");
      for (let i = 0; i < characters.length; i++) {
        $("#character-container").append(`      
        <div class="character-info" id="character-info">
        <div class="name">Character Name : ${characters[i].name}</div>
        <div class="occupation">Character Occupation : ${characters[i].occupation}</div>
        <div class="debt">Character Debt : ${characters[i].debt}</div>
        <div class="weapon">Character Weapon : ${characters[i].weapon}</div>
      </div>
      `);
      }
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI.getOneRegister($("#search-input").prop("value")).then(character => {
      // $("#character-container").html(`<pre>${JSON.stringify(characters, null, 2)}</pre>`);
      $("#character-container").html(`
        <div class="character-info" id="character-info">
        <div class="name">Character Name : ${character.name}</div>
        <div class="occupation">Character Occupation : ${character.occupation}</div>
        <div class="debt">Character Debt : ${character.debt}</div>
        <div class="weapon">Character Weapon : ${character.weapon}</div>
      </div>
      `);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    charactersAPI.deleteOneRegister($("#delete-input").prop("value"));
    //.then(character => {
    // $("#character-container").html(`<pre>${JSON.stringify(characters, null, 2)}</pre>`);
    //   $("#character-container").html(`
    //     <div class="character-info" id="character-info">
    //     <div class="name">Character Name : ${character.name}</div>
    //     <div class="occupation">Character Occupation : ${character.occupation}</div>
    //     <div class="debt">Character Debt : ${character.debt}</div>
    //     <div class="weapon">Character Weapon : ${character.weapon}</div>
    //   </div>
    //   `);
    // });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    if ($("#chr-id").val() !== "") {
      if ($("#edited-name").val() !== "") {
        charactersAPI
          .updateOneRegister($("#chr-id").val(), {
            name: $("#edited-name").val()
          })
          .then(character => {
            console.log("Name updated");
          });
      }
      if ($("#edited-occupation").val() !== "") {
        charactersAPI
          .updateOneRegister($("#chr-id").val(), {
            occupation: $("#edited-occupation").val()
          })
          .then(character => {
            console.log("occupation updated");
          });
      }
      if ($("#edited-weapon").val() !== "") {
        charactersAPI
          .updateOneRegister($("#chr-id").val(), {
            weapon: $("#edited-weapon").val()
          })
          .then(character => {
            console.log("weapon updated");
          });
      }
      if ($("#edited-debt").val() !== "") {
        charactersAPI
          .updateOneRegister($("#chr-id").val(), {
            debt: $("#edited-debt").is(":checked")
          })
          .then(character => {
            console.log("dept updated");
          });
      }
    }
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    charactersAPI
      .createOneRegister({
        name: $("#new-name").val(),
        occupation: $("#new-occupation").val(),
        weapon: $("#new-weapon").val(),
        debt: $("#new-dept").is(":checked")
      })
      .then(character => {
        console.log("New character added");
      });
  };
});
