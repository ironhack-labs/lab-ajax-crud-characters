const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    let DOMContainer = document.querySelector(`.characters-container`)
    DOMContainer.innerHTML = ""
    charactersAPI.getFullList()
      .then(charactersData => charactersData.data.forEach(character => {
        DOMContainer.innerHTML +=
          `<div class="character-info">
        <div class="name">${character.name}</div>
        <div class="occupation">${character.occupation}</div>
        <div class="cartoon">${character.cartoon ? 'Cartoon' : 'Real'}</div>
        <div class="weapon">${character.weapon}</div>
        </div>`

      }))
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    let DOMContainer = document.querySelector(`.characters-container`)
    DOMContainer.innerHTML = ""
    let id = document.querySelector('#character-id').value
    // console.log(id)
    charactersAPI.getOneRegister(id)
      .then(characterData => {
        console.log(characterData)
        DOMContainer.innerHTML =
          `<div class="character-info">
        <div class="name">${characterData.data.name}</div>
        <div class="occupation">${characterData.data.occupation}</div>
        <div class="cartoon">${characterData.data.cartoon ? 'Cartoon' : 'Real'}</div>
        <div class="weapon">${characterData.data.weapon}</div>
        </div>`
      })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister(document.querySelector('#character-id-delete').value).then(result => {
      console.log(result)
    })
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    let editCheck = document.querySelector('#editCartoon').checked ? true : false
    let id = document.querySelector('#editID').value
    let editCharacter = {
      name: document.querySelector('#editName').value,
      occupation: document.querySelector('#editOccupation').value,
      weapon: document.querySelector('#editWeapon').value,
      cartoon: editCheck
    }
    charactersAPI.updateOneRegister(id, editCharacter)
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    let check = document.querySelector('#cartoon').checked ? true : false

    let minion = {
      name: document.querySelector('#name').value,
      occupation: document.querySelector('#occupation').value,
      weapon: document.querySelector('#weapon').value,
      cartoon: check
    }
    charactersAPI.createOneRegister(minion)
  });
});
