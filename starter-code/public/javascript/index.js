// const APIHandler = require('./APIHandler')

const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(dbRes => {
        console.log(dbRes.data, "get all characters");
        displayCharacters(dbRes.data);
      })
      .catch(dbErr => {
        console.log("error getting full list", dbErr);
      });
  };

  document.getElementById("fetch-one").onclick = function() {
    let ID = document.querySelector(".operation input");
    // we return the axios promise here
    charactersAPI
      .getOneRegister(ID.value)
      .then(dbRes => {
        console.log(dbRes.data, "get one character by id");
        displayOneCharacter(dbRes.data);
      })
      .catch(dbErr => {
        console.log("error getting one character", dbErr);
      });
  };

  document.getElementById("delete-one").onclick = function() {
    console.log("delete button clicked");
    let ID = document.querySelector(".delete input");
    charactersAPI
      .deleteOneRegister(ID.value)
      .then(resp => {
        console.log("character has been successfully deleted", resp);
      })
      .catch(err => {
        console.log("character not found", err);
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    console.log("character edited");
    const form = document.getElementById("edit-character-form").elements;
    var id = form["chr-id"].value;
    var name = form["name"].value;
    var occupation = form["occupation"].value;
    var weapon = form["weapon"].value;
    var checkbox = form["cartoon"].checked;
    let charachterInfo = {};
    // to make it optional
    if (name) charachterInfo.name = name;
    if (occupation) charachterInfo.occupation = occupation;
    if (weapon) charachterInfo.weapon = weapon;
    charachterInfo.cartoon = checkbox;
    console.log(typeof occupation);
    console.log(name, occupation, weapon, checkbox);
    charactersAPI
      .updateOneRegister(id, charachterInfo)
      .then(response => {
        console.log("successful update: ", response);
      })
      .catch(err => {
        console.log("character not found:", id);
      });
  };

  document.getElementById("new-character-form").onsubmit = function(event) {
    event.preventDefault();
    console.log(document.getElementById("new-character-form").elements);
    const form = document.getElementById("new-character-form").elements;
    var name = form["name"].value;
    var occupation = form["occupation"].value;
    var weapon = form["weapon"].value;
    var checkbox = form["cartoon"].checked;
    console.log(name, occupation, weapon, checkbox);
    const charachterInfo = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      cartoon: checkbox
    };
    charactersAPI
      .createOneRegister(charachterInfo)
      .then(resp => {
        console.log(
          "post was succesful and the following is the response",
          resp
        );
      })
      .catch(err => {
        console.log("following error during posting:", err);
      });
    // form.reset();
    console.log(name, occupation, weapon, checkbox);
    // You may notice that your log is disappearing when you do that!
    //That’s because the form submission is refreshing the page.
    // We need to stop it from doing that.
    //We can short-circuit the regular form submission with the submit
    // event’s preventDefault method.
  };
});

function displayCharacters(characterList) {
  console.log(characterList); // an array of objects
  let character_info_div = document.querySelector(".characters-container");
  character_info_div.innerHTML = "";
  console.log(characterList[0], "-----");
  characterList.forEach(character => {
    let character_display = document.createElement("div");
    console.log(character_display);
    character_display.className = "character-info";
    character_display.innerHTML = `
      <div class='character_list'>  
      <p>id: ${character.id}</p>
      <p>Name: ${character.name}</p>
      <p>Occupation: ${character.occupation}</p>
      <p>Is a Cartoon? ${character.cartoon}</p>
      <p>Weapon: ${character.weapon}</p>
      </div>
      `;
    character_info_div.appendChild(character_display);
  });
}

function displayOneCharacter(character) {
  let character_info_div = document.querySelector(".character-info");
  console.log(character_info_div);
  character_info_div.innerHTML = `
  <div class='character_list'>  
  <p>id: ${character.id}</p>
  <p>Name: ${character.name}</p>
  <p>Occupation: ${character.occupation}</p>
  <p>Is a Cartoon? ${character.cartoon}</p>
  <p>Weapon: ${character.weapon}</p>
  </div>
  `;
}
