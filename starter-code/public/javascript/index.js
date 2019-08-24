const charactersAPI = new APIHandler("http://localhost:8000")

function createCharacter(characterObj) {
  const charactersContainer = document.querySelector(".characters-container");

  if (!document.querySelector(`#id-${characterObj.id}`)) {
    charactersContainer.innerHTML +=
      `<div id = id-${characterObj.id} class="character-info">
          <div class="name">${characterObj.name}</div>
          <div class="occupation">${characterObj.occupation}</div>
          <div class="cartoon">${characterObj.cartoon}</div>
          <div class="weapon">${characterObj.weapon}</div>
        </div>`;
  }

  else {
    characterToUpdate = document.querySelector(`#id-${characterObj.id}`);
    newCharacterInfo = document.createElement("div");
    newCharacterInfo.id = `id-${characterObj.id}`;
    newCharacterInfo.className = "character-info";
    newCharacterInfo.innerHTML +=
      `<div class="name">${characterObj.name}</div>
          <div class="occupation">${characterObj.occupation}</div>
          <div class="cartoon">${characterObj.cartoon}</div>
      <div class="weapon">${characterObj.weapon}</div>`;
    charactersContainer.insertBefore(newCharacterInfo, characterToUpdate);
    characterToUpdate.remove();
  }
}

function createCharacters(charactersArr) {
  for (let i = 0; i < charactersArr.length; i++) {
    createCharacter(charactersArr[i]);
  }
}

function extractFormData(FormNode) {
  let test;
  const character = {
    name: FormNode.querySelector(`input[name=name]`).value,
    occupation: FormNode.querySelector(`input[name=occupation]`).value,
    weapon: FormNode.querySelector(`input[name=weapon]`).value,
    cartoon: FormNode.querySelector(`input[name=cartoon]`).checked,
  };

  if (FormNode.querySelector(`input[name=chr-id]`) !== null) {
    character.id = FormNode.querySelector(`input[name=chr-id]`).value;
  }

  return character;
}

function buttonColor(buttonNode, newColor) {
  const oldColor = buttonNode.classList.item(0);
  newColor = newColor == "red" ? "btn-failed" : "btn-success";

  buttonNode.classList.replace(oldColor, newColor);
}

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(charactersArr => createCharacters(charactersArr))
      .catch(error => console.log(error));
  }

  document.getElementById('fetch-one').onclick = function () {
    if (document.querySelector(`input[name=character-id]`).value !== "") {
      charactersAPI.getOneRegister(document.querySelector(`input[name=character-id]`).value)
        .then(characterObj => createCharacter(characterObj))
        .catch(error => console.log(error));
    }

  }

  document.getElementById('delete-one').onclick = function (e) {
    const deleteId = document.querySelector(`input[name=character-id-delete]`).value;
    if (deleteId !== "") {
      charactersAPI.deleteOneRegister(deleteId)
        .then(response => {
          document.querySelector(`#id-${deleteId}`).remove();
          buttonColor(e.target, "green");
        })
        .catch(error => {
          console.log(error);
          buttonColor(e.target, "red");
        });
    }

  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault();
    const characterObj = extractFormData(e.target);
    console.log(characterObj);

    if (characterObj.name === "") {
      charactersAPI.getOneRegister(characterObj.id)
        .then(response => {
          characterObj.name = response.name
          charactersAPI.updateOneRegister(characterObj.id, characterObj)
            .then(response => {
              if (response === "Character not found") {
                buttonColor(e.target.querySelector("button"), "red");
                return;
              }
              createCharacter(characterObj);
              buttonColor(e.target.querySelector("button"), "green");
            })
            .catch(error => {
              console.log(error);
              buttonColor(e.target.querySelector("button"), "red");
            });
          return;
        })
        .catch(error => console.log(error));
    }

    console.log(characterObj);

    charactersAPI.updateOneRegister(characterObj.id, characterObj)
      .then(response => {
        if (response === "Character not found") {
          buttonColor(e.target.querySelector("button"), "red");
          return;
        }
        createCharacter(characterObj);
        buttonColor(e.target.querySelector("button"), "green");
      })
      .catch(error => {
        console.log(error);
        buttonColor(e.target.querySelector("button"), "red");
      });
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault();
    const characterObj = extractFormData(e.target);
    if (characterObj.name === "") {
      buttonColor(e.target.querySelector("button"), "red");
    } else {
      charactersAPI.createOneRegister(characterObj)
        .then(response => {
          // createCharacter(response); //Allows character to show in DOM immediately after being added.
          buttonColor(e.target.querySelector("button"), "green");
        })
        .catch(error => {
          console.log(error);
          buttonColor(e.target.querySelector("button"), "red");
        });
    }
  }
})