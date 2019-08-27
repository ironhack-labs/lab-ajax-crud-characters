const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getCharacters();
  }

  document.getElementById('fetch-one').onclick = function () {
    let fetchId = document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]").value;
    charactersAPI.getID(fetchId);
  }

  document.getElementById('delete-one').onclick = function () {
    let deleteId = document.querySelector("body > section:nth-child(1) > section > div.operation.delete > input[type=text]").value;
    charactersAPI.deleteOne(deleteId);
  }

  document.getElementById('edit-character-form').onsubmit = function (e) {
    e.preventDefault(e)
    let editCharacter = {
      id: document.querySelector("#edit-character-form > div:nth-child(1) > input[type=text]").value,
      name: document.querySelector("#edit-character-form > div:nth-child(2) > input[type=text]").value,
      occupation: document.querySelector("#edit-character-form > div:nth-child(3) > input[type=text]").value,
      weapon: document.querySelector("#edit-character-form > div:nth-child(4) > input[type=text]").value,
      cartoon: document.querySelector("#edit-character-form > div:nth-child(5) > input[type=checkbox]").checked
    }
    charactersAPI.editCharacter(editCharacter.id, editCharacter)
  }

  document.getElementById('new-character-form').onsubmit = function (e) {
    e.preventDefault(e)
    let newCharacter = {
      name: document.querySelector("#new-character-form > div:nth-child(1) > input[type=text]").value,
      occupation: document.querySelector("#new-character-form > div:nth-child(2) > input[type=text]").value,
      weapon: document.querySelector("#new-character-form > div:nth-child(3) > input[type=text]").value,
      cartoon: document.querySelector("#new-character-form > div:nth-child(4) > input[type=checkbox]").checked
    }
    charactersAPI.createCharacter(newCharacter);
  }

})
