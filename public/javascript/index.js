const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.querySelector('.characters-container')

function generateCharacterDOM(character) {
  const characterDOM = document.createElement('div')
  characterDOM.classList.add('character-info')
  characterDOM.innerHTML = ` <div class="name">${character.name}</div> <div class="occupation">${character.occupation}</div> <div class="cartoon"> ${character.cartoon ? "It's a Cartoon!" : "Not a Cartoon." }</div> <div class="weapon">${character.weapon}</div>`
  return characterDOM
}


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(res => {
      
      const characters = res.data

      //Iterate the response's array
      charactersContainer.innerHTML = ""

      characters.forEach(character => {
        charactersContainer.appendChild(generateCharacterDOM(character))
      })
    })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.querySelector(`input[name="character-id"]`).value

    charactersAPI.getOneRegister(characterId).then(res => {

      const character = res.data

      charactersContainer.innerHTML = ""
      charactersContainer.appendChild(generateCharacterDOM(character))

    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.querySelector(`input[name="character-id-delete"`).value
    charactersAPI.deleteOneRegister(characterId)
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let newCharacterForm = document.getElementById("edit-character-form")
    let characterId = newCharacterForm.querySelector(".chr-id").value
    
    let characterInfo = {
      name: newCharacterForm.name.value,
      occupation: newCharacterForm.occupation.value,
      weapon: newCharacterForm.weapon.value,
      cartoon: newCharacterForm.cartoon.checked,
    }

    charactersAPI.updateOneRegister(characterId, characterInfo)

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    let newCharacterForm = document.getElementById("new-character-form")
    
    let characterInfo = {
      name: newCharacterForm.name.value,
      occupation: newCharacterForm.occupation.value,
      weapon: newCharacterForm.weapon.value,
      cartoon: newCharacterForm.cartoon.checked,
    }

    charactersAPI.createOneRegister(characterInfo)
  });
});
