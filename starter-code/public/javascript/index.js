const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    const chContainer = document.querySelector('.characters-container')
    chContainer.innerHTML = ""
    charactersAPI.getFullList()
      .then(data => {
        data.forEach(function (character) {
          chContainer.innerHTML +=
            `<div class="character-info">
          <div class="ID">ID: ${character.id}</div>
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
        </div>`
        })
      })

  }

  document.getElementById('fetch-one').onclick = function () {
    const chContainer = document.querySelector('.characters-container')
    let id = document.querySelector(".operation input").value
    charactersAPI.getOneRegister(id)
    .then(character => {
      chContainer.innerHTML = `<div class="character-info">
      <div class="ID">ID: ${character.id}</div>
      <div class="name">Name: ${character.name}</div>
      <div class="occupation">Occupation: ${character.occupation}</div>
      <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
      <div class="weapon">Weapon: ${character.weapon}</div>
    </div>`
    })
  }

  document.getElementById('delete-one').onclick = function () {
    let id = document.querySelector(".delete input").value
    charactersAPI.deleteOneRegister(id)
  }

  document.getElementById('update-data').onclick = function () {
    let id = document.querySelector("#edit-character-form input[name='chr-id']").value
    let name = document.querySelector("#edit-character-form input[name='name']").value
    let occupation = document.querySelector("#edit-character-form input[name='occupation']").value
    let weapon = document.querySelector("#edit-character-form input[name='weapon']").value
    let cartoon = document.querySelector("#edit-character-form input[name='cartoon']").checked
    charactersAPI.updateOneRegister(id, name, occupation, weapon, cartoon)
  }

  document.getElementById('send-data').onclick = function () {
    let name = document.querySelector("#new-character-form input[name='name']").value
    let occupation = document.querySelector("#new-character-form input[name='occupation']").value
    let weapon = document.querySelector("#new-character-form input[name='weapon']").value
    let cartoon = document.querySelector("#new-character-form input[name='cartoon']").checked
    charactersAPI.createOneRegister(name, occupation, weapon, cartoon)
  }
})
