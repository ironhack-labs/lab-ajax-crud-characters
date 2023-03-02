const charactersAPI = new APIHandler('http://localhost:8000/');

const charactersContainer = document.querySelector('.characters-container')

function generateCharacterDOM(character) {
  const characterDOM = document.createElement('div')
  characterDOM.classList.add('character-info')
  characterDOM.innerHTML = `<div class="name">${character.name}</div> <div class="occupation">${character.occupation}</div> <div class="cartoon"> ${character.cartoon ? "It's a Cartoon!" : "Not a Cartoon." }</div> <div class="weapon">${character.weapon}</div>`
  return characterDOM
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
    .getFullList()
    .then((res) => {
      const characters = res.data
      charactersContainer.innerHTML = ""

      characters.forEach(character =>
        charactersContainer.appendChild(generateCharacterDOM(character)))
    })
    .catch(error => console.log(error))
  })
  

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    const id = document.querySelector(`input[name="character-id"]`).value

    charactersAPI
    .getOneRegister(id)
    .then((res) => {
      const character = res.data
      charactersContainer.innerHTML = ""

      charactersContainer.appendChild(generateCharacterDOM(character))
    })
    .catch(error => console.log(error))
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const id = document.querySelector(`input[name="character-id-delete"]`).value

    charactersAPI
    .deleteOneRegister(id)

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let editCharacterForm = document.getElementById("edit-character-form")
    let id = editCharacterForm.querySelector(".chr-id").value

    let characterInfo = {
      name: editCharacterForm.name.value,
      occupation: editCharacterForm.occupation.value,
      weapon: editCharacterForm.weapon.value,
      cartoon: editCharacterForm.cartoon.checked
    }

    charactersAPI
    .updateOneRegister(id, characterInfo)
    
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let newCharacterForm = document.getElementById("new-character-form")

    let characterInfo = {
      name: newCharacterForm.name.value,
      occupation: newCharacterForm.occupation.value,
      weapon: newCharacterForm.weapon.value,
      cartoon: newCharacterForm.cartoon.checked
    }

    charactersAPI.createOneRegister(characterInfo)

  });
});

