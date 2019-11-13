const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  // fetch all character
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      event.preventDefault();
      charactersAPI
        .getFullList()
        .then(apiRes => {
          const characters = apiRes.data;
          let tpl = "";
          characters.forEach(char => {
            tpl += `<div class="character-info">
            <div class="name">Character Name: ${char.name}</div>
            <div class="occupation">Character Occupation:${char.occupation} </div>
            <div class="cartoon">Is a Cartoon?: ${char.cartoon}</div>
            <div class="weapon">Character Weapon:${char.weapon} </div>
          </div>`;
          });
          const container = document.querySelector(".characters-container");
          container.innerHTML = tpl;
        })
        .catch(err => {
          console.log(err);
        });
    });
  // fetch one character
  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      event.preventDefault();
      var id = document.querySelector(".operation>input").value;
      console.log(id);
      charactersAPI
        .getOneRegister(id)
        .then(apiRes => {
          const characters = apiRes.data;
          console.log(apiRes.data);
          let tpl = "";
          tpl += `<div class="character-info">
        <div class="name">Character Name: ${characters.name}</div>
        <div class="occupation">Character Occupation:${characters.occupation} </div>
        <div class="cartoon">Is a Cartoon?: ${characters.cartoon}</div>
        <div class="weapon">Character Weapon:${characters.weapon} </div>
      </div>`;
          var container = document.querySelector(".characters-container");
          console.log(container);
          container.innerHTML = tpl;
        })
        .catch(err => {
          console.log(err);
        });
    });
  // delete one character
  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {
      event.preventDefault();
      const deleteButton = document.querySelector("#delete-one");
      let characterId = document.getElementsByName("character-id-delete")[0]
        .value;
      console.log(characterId);
      charactersAPI
        .deleteOneRegister(characterId)
        .then(apiRes => {
          deleteButton.classList.add("formValid");
          deleteButton.classList.remove("formNotValid");
          console.log(apiRes);
        })
        .catch(err => {
          deleteButton.classList.remove("formValid");
          deleteButton.classList.add("formNotValid");
          console.log(err);
        });
    });

  // Edit one character
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      const editButton = document.querySelector("#edit-character-form button");
      let inputs = document.querySelectorAll("#edit-character-form input");
      const updatedCharacter = {};
      let characterId = document.getElementsByName("chr-id")[0].value;
      let id = characterId;
      inputs.forEach(input => {
        if (input.name === "cartoon") {
          updatedCharacter[input.name] = input.checked;
        } else {
          updatedCharacter[input.name] = input.value;
        }
      });
      charactersAPI
        .updateOneRegister(updatedCharacter, id)
        .then(apiRes => {
          editButton.classList.add("formValid");
          editButton.classList.remove("formNotValid");
        })
        .catch(err => {
          editButton.classList.remove("formValid");
          editButton.classList.add("formNotValid");
        });
    });

  //Create one character
  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {
      event.preventDefault();
      console.log("clicked");
      let createButton = document.querySelector("#send-data");
      let inputs = document.querySelectorAll("#new-character-form input");
      const newCharacter = {};
      inputs.forEach(input => {
        if (input.name === "cartoon") {
          newCharacter[input.name] = input.checked;
        } else {
          newCharacter[input.name] = input.value;
        }
      });
      charactersAPI
        .createOneRegister(newCharacter)
        .then(apiRes => {
          createButton.classList.add("formValid");
          createButton.classList.remove("formNotValid");
          console.log(apiRes);
        })
        .catch(err => {
          createButton.classList.remove("formValid");
          createButton.classList.add("formNotValid");
          console.log(err);
        });
    });
});
