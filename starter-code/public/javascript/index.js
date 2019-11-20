const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    event.preventDefault()

    charactersAPI.getFullList().then((list) => {
      console.log(list.data)
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    event.preventDefault()

    charactersAPI.getOneRegister(estefania.value).then((character) => {
      console.log(character)
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    event.preventDefault()
    charactersAPI.deleteOneRegister(newDelete.value).then((character) => {
      console.log(character)
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let updateCharacter = {
      id: updateId.value,
      name: updateName.value,
      occupation: updateOcupation.value,
      cartoon: updateCartoon.checked,
      weapon: updateWeapon.value
    }
    charactersAPI.updateOneRegister(updateCharacter).then(editedCharacter => {
      console.log(editedCharacter.data)
    })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let newCharacter = {
      name: newName.value,
      occupation: newOcupation.value,
      cartoon: newCartoon.checked,
      weapon: newWeapon.value
    }
    charactersAPI.createOneRegister(newCharacter).then(newCharacter => {
      console.log(newCharacter.data)
    })
  });
});