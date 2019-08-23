const charactersAPI = new APIHandler("http://localhost:8000")
var characters = {}
var offBackground = "#629e34"
var onBackground = "#57627a"

function toggleBackground(color) {
  let container = document.querySelector("body > section:nth-child(1)")
  container.style.backgroundColor = color
}

function clearCharacters() {
  for (key of Object.keys(characters)) {
    characters[key].remove()
  }
  characters = {}
}

function clearFields() {
  let inputs = document.getElementsByTagName('input')
  for (index = 0; index < inputs.length; ++index) {
    inputs[index].value = ""
  }
}
function charViewFromData(data) {
  return new CharacterView(data.id, data.name, data.cartoon, data.occupation, data.weapon)
}

function processCharData(data) {
  for (var propName in data) {
    if (data[propName] === null || data[propName] === undefined || data[propName] === "") {
      delete data[propName]
    }
  }
  return data
}

async function showAll() {
  let charactersData = await charactersAPI.getFullList()
  clearCharacters()
  for (key of Object.keys(charactersData)) {
    characters[key] = charViewFromData(charactersData[key])
  }
}
class CharacterView {
  constructor(id, name, cartoon, occupation, weapon) {
    this.div = document.createElement('DIV')
    this.idDiv = document.createElement('DIV')
    this.nameDiv = document.createElement('DIV')
    this.occupationDiv = document.createElement('DIV')
    this.cartoonDiv = document.createElement('DIV')
    this.weaponDiv = document.createElement('DIV')

    this.children = [this.idDiv, this.nameDiv, this.occupationDiv, this.cartoonDiv, this.weaponDiv]
    this.children.map(c => this.div.appendChild(c))

    this.div.className = 'character-info'
    this.idDiv.className = 'id'
    this.nameDiv.className = 'name'
    this.occupationDiv.className = 'occupation'
    this.cartoonDiv.className = 'cartoon'
    this.weaponDiv.className = 'weapon'

    this.idDiv.innerHTML = `ID: ${id}`
    this.nameDiv.innerHTML = `Name: ${name}`
    this.cartoonDiv.innerHTML = `Is a Cartoon?: ${cartoon}`
    this.occupationDiv.innerHTML = `Occupation: ${occupation}`
    this.weaponDiv.innerHTML = `Weapon: ${weapon}`

    document.querySelector("body > section:nth-child(1) > div").appendChild(this.div)
  }
  remove() {
    this.div.remove()
  }
}

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = async function () {
    showAll()
    toggleBackground(onBackground)
  }

  document.getElementById('fetch-one').onclick = async function () {
    let id = Number(document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]").value)
    let charData = await charactersAPI.getOneRegister(id)
    clearCharacters()
    characters[id] = charViewFromData(charData)
    toggleBackground(onBackground)
  }

  document.getElementById('delete-one').onclick = async function () {
    let id = Number(document.querySelector("body > section:nth-child(1) > section > div.operation.delete > input[type=text]").value)
    await charactersAPI.deleteOneRegister(id)
    toggleBackground(onBackground)
  }

  document.getElementById('edit-character-form').onsubmit = async function (e) {
    let characterData = {
      name: document.querySelector("#edit-character-form > div:nth-child(2) > input[type=text]").value,
      occupation: document.querySelector("#edit-character-form > div:nth-child(3) > input[type=text]").value,
      weapon: document.querySelector("#edit-character-form > div:nth-child(4) > input[type=text]").value,
      cartoon: document.querySelector("#edit-character-form > div:nth-child(5) > input[type=checkbox]").checked
    }
    let id = Number(document.querySelector("#edit-character-form > div:nth-child(1) > input[type=text]").value)
    await charactersAPI.updateOneRegister(id, processCharData(characterData))
    toggleBackground(offBackground)
    clearFields()
    showAll()
  }

  document.getElementById('new-character-form').onsubmit = async function (e) {
    let characterData = {
      name: document.querySelector("#new-character-form > div:nth-child(1) > input[type=text]").value,
      occupation: document.querySelector("#new-character-form > div:nth-child(2) > input[type=text]").value,
      weapon: document.querySelector("#new-character-form > div:nth-child(3) > input[type=text]").value,
      cartoon: document.querySelector("#new-character-form > div:nth-child(4) > input[type=checkbox]").checked
    }
    await charactersAPI.createOneRegister(processCharData(characterData))
    toggleBackground(offBackground)
    clearFields()
    showAll()
  }

  $("#edit-character-form").submit(function (e) {
    e.preventDefault();
  });

  $("#new-character-form").submit(function (e) {
    e.preventDefault();
  });
})
