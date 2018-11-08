const charactersAPI = new APIHandler("http://localhost:7000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(characters => {
        document.getElementById("characters-container").innerHTML = ""
        for (let i = 0; i < characters.length; i++) {
          document.getElementById("characters-container").innerHTML +=
            `<div class="character-info">
          <div class="name">Character Name: ${characters[i].name}</div>
          <div class="occupation">Character occupation: ${characters[i].occupation}</div>
          <div class="cartoon">Is a cartoon? ${characters[i].cartoon}</div>
          <div class="weapon">Character Weapon: ${characters[i].weapon}</div>
        </div>`
        }
        console.log(characters)
      })
  }

  document.getElementById('fetch-one').onclick = function () {
    let id = document.getElementById("search-id").value
    charactersAPI.getOneRegister(id)
      .then(character => {
        document.getElementById("characters-container").innerHTML =
          `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character occupation: ${character.occupation}</div>
        <div class="cartoon">Is a cartoon? ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
      })
  }

  document.getElementById('delete-one').onclick = function () {
    let id = document.getElementById("delete-id").value
    charactersAPI.deleteOneRegister(id)
      .then(text => {
        if (text === "Character has been successfully deleted") {
          document.getElementById("delete-one").style.backgroundColor = "green"
        }
        else {
          document.getElementById("delete-one").style.backgroundColor = "red"
        }
      })
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    event.preventDefault();
    let id = document.getElementById("edit-id").value
    let obj = {
      name: document.getElementById("edit-name").value,
      occupation: document.getElementById("edit-occupation").value,
      cartoon: document.getElementById("edit-cartoon").checked,
      weapon: document.getElementById("edit-weapon").value
    }
    charactersAPI.updateOneRegister(id, obj)
      .then(text => {
        if (text === "Character not found") {
          document.getElementById("edit-data").style.backgroundColor = "red"
        }
        else {
          document.getElementById("edit-data").style.backgroundColor = "green"
        }
      })
  }

  document.getElementById('new-character-form').onsubmit = function () {
    event.preventDefault();
    let obj = {
      name: document.getElementById("create-name").value,
      occupation: document.getElementById("create-occupation").value,
      cartoon: document.getElementById("create-cartoon").checked,
      weapon: document.getElementById("create-weapon").value
    }
    if (obj.name.length > 0 && obj.occupation.length > 0 && obj.weapon.length > 0) {
      charactersAPI.createOneRegister(obj)
        .then(text => {
          if (text === "Character not found") {
            document.getElementById("send-data").style.backgroundColor = "red"
          }
          else {
            document.getElementById("send-data").style.backgroundColor = "green"
          }
        })
    }
    else {
      document.getElementById("send-data").style.backgroundColor = "red"
    }
  }
})
