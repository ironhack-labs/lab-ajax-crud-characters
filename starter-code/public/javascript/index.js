const charactersAPI = new APIHandler("http://localhost:8000");

//containers
const characContainer = document.getElementById("characters-container");

//inputs
const searchId = document.getElementById("search-id");
const characterIdDelete = document.getElementById("character-id-delete");

//buttons
const deleteOne = document.getElementById("delete-one");

//forms
const newCharacterForm = document.getElementById("new-character-form");
const editCharacterForm = document.getElementById("edit-character-form");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      characContainer.innerHTML = "";
      let data = charactersAPI.getFullList();
      data
        .then(characters => {
          console.log(characters);
          characters.forEach(character => {
            characContainer.innerHTML += `<div class="character-info">
            <div class="name">Name: <span class="character-element"> ${character.name}</span></div>
            <div class="occupation">Occupation: <span class="character-element"> ${character.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span class="character-element"> ${character.cartoon}</span></div>
            <div class="weapon">Weapon: <span class="character-element">${character.weapon}</span></div>
          </div>`;
          });
        })
        .catch(err => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      if (searchId.value !== "") {
        characContainer.innerHTML = "";
        let id = searchId.value;
        let data = charactersAPI.getOneRegister(id);
        data
          .then(character => {
            console.log(character);
            characContainer.innerHTML += `<div class="character-info">
            <div class="name">Name: <span class="character-element"> ${character.name}</span></div>
            <div class="occupation">Occupation: <span class="character-element"> ${character.occupation}</span></div>
            <div class="cartoon">Is a Cartoon?: <span class="character-element"> ${character.cartoon}</span></div>
            <div class="weapon">Weapon: <span class="character-element">${character.weapon}</span></div>
          </div>`;

            searchId.value = "";
          })
          .catch(err => console.log(err));
      }
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      if (characterIdDelete.value !== "") {
        let id = characterIdDelete.value;
        let data = charactersAPI.deleteOneRegister(id);
        data
          .then(character => {
            characterIdDelete = "";
            deleteOne.setAttribute("class", "active");
          })
          .catch(err => {
            console.log(err);
            deleteOne.setAttribute("class", "inactive");
          });
      }
    });

  document
    .getElementById("send-update-data")
    .addEventListener("click", function(event) {
      let id = editCharacterForm.chr_id.value;
      let name = editCharacterForm.name.value;
      let occupation = editCharacterForm.occupation.value;
      let weapon = editCharacterForm.weapon.value;
      let cartoon = editCharacterForm.cartoon.checked;
      let data = { id, name, occupation, weapon, cartoon };
      let updatedData = charactersAPI.updateOneRegister(data, id);
      updatedData
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
    });

  //for new character
  document.getElementById("send-data").onclick = () => {
    let name = newCharacterForm.name.value;
    let occupation = newCharacterForm.occupation.value;
    let weapon = newCharacterForm.weapon.value;
    let cartoon = newCharacterForm.cartoon.checked;
    let data = { name, occupation, weapon, cartoon };
    let createdData = charactersAPI.createOneRegister(data);
    createdData
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };
});
