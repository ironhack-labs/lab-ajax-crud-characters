const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    // targeting the container
    let charactersContainer = document.getElementsByClassName('characters-container')
    charactersContainer[0].innerHTML = ''

    charactersAPI.getFullList()
      .then(characters => {
        console.log(characters)
        characters.forEach((character) => {
          charactersContainer[0].innerHTML += `<div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div></div>`
        })

      })
      .catch(err => console.log(err))


  }

  document.getElementById('fetch-one').onclick = function () {
    let charactersContainer = document.getElementsByClassName('characters-container')
    charactersContainer[0].innerHTML = ''

    let Id = document.getElementById('search-id')
    console.log(Id)
    charactersAPI.getOneRegister(Id.value)
      .then(character => {
        charactersContainer[0].innerHTML += `<div class="character-info">
          <div class="name">${character.name}</div>
          <div class="occupation">${character.occupation}</div>
          <div class="cartoon">${character.cartoon}</div>
          <div class="weapon">${character.weapon}</div></div>`
      })
  }

  document.getElementById('delete-one').onclick = function () {
    let Id = document.getElementById('delete-id')
    charactersAPI.deleteOneRegister(Id.value)
  }


  document.getElementById('edit-character-form').onsubmit = function () {
    let newName = document.getElementsByClassName('new-name')
    let newOccupation = document.getElementsByClassName('new-occupation')
    let newWeapon = document.getElementsByClassName('new-weapon')
    let newCartoon = document.getElementsByClassName('new-cartoon')
    let Id = document.getElementById('edit-id')

    let updatedInfo = {
      name: newName[1].value,
      occupation: newOccupation[1].value,
      cartoon: newCartoon[1].checked,
      weapon: newWeapon[1].value
    }

    charactersAPI.updateOneRegister(updatedInfo, Id.value)
  }


  document.getElementById('new-character-form').onsubmit = function () {
    let newName = document.getElementsByClassName('new-name')
    let newOccupation = document.getElementsByClassName('new-occupation')
    let newWeapon = document.getElementsByClassName('new-weapon')
    let newCartoon = document.getElementsByClassName('new-cartoon')



    let characterInfo = {
      name: newName[0].value,
      occupation: newOccupation[0].value,
      cartoon: newCartoon[0].checked,
      weapon: newWeapon[0].value
    }

    charactersAPI.createOneRegister(characterInfo)

  }
})
