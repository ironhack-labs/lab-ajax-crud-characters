// New characters API
const charactersAPI = new APIHandler('http://localhost:8000')

//Selectors 
const mainCardCointainer = document.querySelector(".characters-container")
const editButton = document.querySelector("#edit-character-form #send-data")
const createButton = document.querySelector("#new-character-form #send-data")
const editForm = document.querySelector("#edit-character-form")
const createForm = document.querySelector("#new-character-form")
const searchInput = document.querySelector("input[name='character-id']")
const deleteInput = document.querySelector("input[name='character-id-delete']")

//Helper functions
const createElm = (elm, className, textToUpdate) => {
  const elem = document.createElement(elm);
  elem.setAttribute("class", className)
  elem.innerHTML = textToUpdate
  return elem;
}

const drawCharacterCard = (character) => {
  const cardsContainer = createElm("div", "character-info", "")
  cardsContainer.appendChild(createElm("div", "name", `Character Name: ${character.name}`))
  cardsContainer.appendChild(createElm("div", "occupation", `Character Ocupation: ${character.occupation}`))
  cardsContainer.appendChild(createElm("div", "weapon", `Character weapon: ${character.weapon}`))
  cardsContainer.appendChild(createElm("div", "cartoon", `Is a cartoon? ${character.cartoon}`))
  mainCardCointainer.appendChild(cardsContainer)
}

const drawCharactersCard = (characters) => {
  characters.forEach(character => {
    drawCharacterCard(character)
  })
}

const emptyCardContainer = () => mainCardCointainer.innerHTML = ""

//Event listeners
window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', () => {
    charactersAPI.getFullList()
      .then(characters => {
        emptyCardContainer()
        drawCharactersCard(characters)
      })
      .catch(err => console.log(err))
  });

  document.getElementById('fetch-one').addEventListener('click', () => {
    const id = document.querySelector(".operation input").value
    charactersAPI.getOneRegister(id)
      .then(character => {
        emptyCardContainer()
        drawCharacterCard(character)
        searchInput.value = ""
      })
      .catch(err => {
        emptyCardContainer()
        console.log(err)
      })
  });

  document.getElementById('delete-one').addEventListener('click', (e) => {
    const id = document.querySelector(".operation.delete input").value
    charactersAPI.deleteOneRegister(id)
      .then(() => {
        e.target.style.backgroundColor = "green"
        deleteInput.value = ""
      })
      .catch(err => {
        e.target.style.backgroundColor = "red"
        console.log(err)
      })
  });

  document.getElementById('edit-character-form').addEventListener('submit', () => {
    event.preventDefault()
    const inputsValues = [...document.querySelectorAll("#edit-character-form input")].map(elm => elm.value)
    const [id, name, occupation, weapon, cartoon] = inputsValues
    charactersAPI.updateOneRegister(id, {
        name,
        occupation,
        weapon,
        cartoon
      })
      .then(() => {
        editButton.style.backgroundColor = "green"
        editForm.reset()
      })
      .catch(err => {
        editButton.style.backgroundColor = "red"
        console.log(err)
      })
  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    event.preventDefault()
    const inputsValues = [...document.querySelectorAll("#new-character-form input")].map(elm => elm.value)
    const [name, occupation, weapon, cartoon] = inputsValues
    charactersAPI.createOneRegister({
        name,
        occupation,
        weapon,
        cartoon
      })
      .then(() => {
        createButton.style.backgroundColor = "green"
        createForm.reset()
      })
      .catch(err => {
        createButton.style.backgroundColor = "red"
        console.log(err)
      })
  });
});