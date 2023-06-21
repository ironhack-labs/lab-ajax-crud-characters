// @ts-nocheck
const charactersAPI = new APIHandler('http://localhost:8000');
const charactersContainer = document.querySelector(".characters-container")

function appendToCharacterContainer(id, name, occupation, weapon, cartoon) {
  const characterInfoDiv = document.createElement("div")
  const idDiv = document.createElement("div")
  const nameDiv = document.createElement("div")
  const occupationDiv = document.createElement("div")
  const cartoonDiv = document.createElement("div")
  const weaponDiv = document.createElement("div")
  characterInfoDiv.className = "character-info"
  idDiv.className = "Id"
  idDiv.innerHTML = "Id:"
  nameDiv.className = "name"
  nameDiv.innerHTML = "Name:"
  occupationDiv.className = "occupation"
  occupationDiv.innerHTML = "Occupation:"
  cartoonDiv.className = "cartoon"
  cartoonDiv.innerHTML = " Is a Cartoon?:"
  weaponDiv.className = "weapon"
  weaponDiv.innerHTML = "Weapon:"

  const idSpan = document.createElement("span")
  const nameSpan = document.createElement("span")
  const occupationSpan = document.createElement("span")
  const cartoonSpan = document.createElement("span")
  const weaponSpan = document.createElement("span")

  idSpan.innerHTML = id
  nameSpan.innerHTML = name
  occupationSpan.innerHTML = occupation
  cartoonSpan.innerHTML = cartoon
  weaponSpan.innerHTML = weapon

  idDiv.appendChild(idSpan)
  nameDiv.appendChild(nameSpan)
  occupationDiv.appendChild(occupationSpan)
  cartoonDiv.appendChild(cartoonSpan)
  weaponDiv.appendChild(weaponSpan)

  characterInfoDiv.appendChild(idDiv)
  characterInfoDiv.appendChild(nameDiv)
  characterInfoDiv.appendChild(occupationDiv)
  characterInfoDiv.appendChild(cartoonDiv)
  characterInfoDiv.appendChild(weaponDiv)

  charactersContainer.appendChild(characterInfoDiv)
}

window.addEventListener('load', () => {
  document.getElementById('fetch-all')
    .addEventListener('click', function (event) {
      charactersAPI.getFullList()
        .then(character => {
          const allCharacters = character.data
          charactersContainer.innerHTML = ""

          allCharacters.forEach(character => {
            const { id, name, occupation, weapon, cartoon } = character
            appendToCharacterContainer(id, name, occupation, weapon, cartoon)
          })
        })
        .catch(error => console.error('Error while getFullList', error))
    })

  document.getElementById('fetch-one')
    .addEventListener('click', function (event) {
      const characterId = document.querySelector('#character-id').value
      charactersContainer.innerHTML = ""

      charactersAPI.getOneRegister(characterId)
        .then(response => {
          const { id, name, occupation, weapon, cartoon } = response.data
          appendToCharacterContainer(id, name, occupation, weapon, cartoon)
        })
        .catch(error => console.log('error while fetching one register', error.message))
    })

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.querySelector('#character-id-delete').value

    charactersAPI.deleteOneRegister(characterId)
      .then(response => { 
        document.querySelector('#delete-one').style.backgroundColor = 'green'
      })
      .catch(error => {
        document.querySelector('#delete-one').style.backgroundColor = 'red'
        console.log('error while deleting', error.message)
      })
    
  });

  document
    .getElementById('new-character-form')
    .addEventListener('submit', function (event) {
      event.preventDefault()
      const name = document.getElementById("name-new").value
      const occupation = document.getElementById("occupation-new").value
      const weapon = document.getElementById("weapon-new").value
      const cartoon = document.getElementById("cartoon-new").checked

      if (name === '' || occupation === '' || weapon === '') {
        document.querySelector("#send-data").style.backgroundColor = "red"
        throw new Error('Please enter Name, Occupation and Weapon')
      }

      charactersAPI.createOneRegister({ name, occupation, weapon, cartoon })
        .then(() => (document.querySelector("#send-data").style.backgroundColor = "green"))
        .catch(() => (document.querySelector("#send-data").style.backgroundColor = "red"))
    });
  
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault()
      const id = document.getElementById("id-edit").value
      let name = document.getElementById("name-edit").value
      let occupation = document.getElementById("occupation-edit").value
      let weapon = document.getElementById("weapon-edit").value
      let cartoon = document.getElementById("cartoon-edit").checked

      let characterData = {}

      if (id === "") {
        document.querySelector("#send-edit-data").style.backgroundColor = "red"
        throw new Error("To edit please enter id")
      }

      charactersAPI.getOneRegister(id)
        .then((character) => {
          characterData = character.data

          if (name !== '') characterData.name = name
          if (occupation !== '') characterData.occupation = occupation
          if (weapon !== '') characterData.weapon = weapon
          characterData.cartoon = cartoon
          
          charactersAPI.updateOneRegister(id, characterData)
            .then(() => (document.querySelector("#send-edit-data").style.backgroundColor = "green"))
            .catch(() => (document.querySelector("#send-data").style.backgroundColor = "red"))
        })
    })
});
