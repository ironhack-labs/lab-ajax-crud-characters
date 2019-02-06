const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then((character) => {
        console.log(character)
        // const allCharacters = character;
        // const lengthCh = allCharacters.length;
        //const characterInfo = document.getElementsByClassName("character-info")
        // allCharacters.forEach(character => {
        //   let newDiv = document.createElement("div");
        //   newDiv.setAttribute('class', 'character-info')
        //   newDiv.innerHTML = character
        // })

        // for (let cont = 0; cont < lengthCh; cont++) {
        //   let newDiv = document.createElement("div");
        //   newDiv.setAttribute('class', 'character-info')
        //   newDiv.innerHTML = character
        //   console.log(newDiv)
        // }

        // const container = document.getElementsByClassName("character-container");

      })
      .catch(error => console.log(error))
  }

  document.getElementById('fetch-one').onclick = function () {
    //const allCharacters = charactersAPI.getFullList();
    let numID = document.getElementById("numID").value

    charactersAPI.getOneRegister(numID)
      .then((character) => console.log(character))
      .catch((error) => console.log(error)
      )

  }

  document.getElementById('delete-one').onclick = function () {
    let deleteID = document.getElementById("deleteID").value
    charactersAPI.deleteOneRegister(deleteID)
      .then((character) => console.log(character))
      .catch(error => console.log(error))
  }

  document.getElementById('edit-character-form').onsubmit = function () {
    let updateID = document.getElementById("updateID").value
    let editName = document.getElementById("editName").value
    let editOccupation = document.getElementById("editOccupation").value
    let editWeapon = document.getElementById("editWeapon").value
    let editCartoon = document.getElementById("editCartoon").value

    let editCharacter = {
      name: editName,
      occupation: editOccupation,
      weapon: editWeapon,
      cartoon: editCartoon
    }
    charactersAPI.updateOneRegister(updateID, editCharacter)
      .then((character) => console.log(character))
      .catch(error => console.log(error))
  }

  document.getElementById('new-character-form').onsubmit = function () {



    let newName = document.getElementById("newName").value
    let newOccupation = document.getElementById("newOccupation").value
    let newWeapon = document.getElementById("newWeapon").value
    let newCartoon = document.getElementById("newCartoon").value

    let newCharacter = {
      name: newName,
      occupation: newOccupation,
      weapon: newWeapon,
      cartoon: newCartoon
    }

    charactersAPI.createOneRegister(newCharacter)
      .then((character) => console.log(character))
      .catch(error => console.log(error))
  }
})
