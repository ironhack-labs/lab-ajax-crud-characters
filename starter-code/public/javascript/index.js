const charactersAPI = new APIHandler("https://minions-api.herokuapp.com")

const charactersContainer = document.querySelector(".characters-container")
const characterId = document.querySelector(".character-info")
const characterInputs = document.querySelectorAll("#new-character-form input")
const characterEditInputs = document.querySelectorAll("#edit-character-form input")



$(document).ready(() => {

  console.log(characterInputs)
  document.getElementById('fetch-all').onclick = function () {
    charactersAPI.getFullList()
      .then(allCharacters => {
        charactersContainer.innerText = ""
        allCharacters.forEach(character => {
          const mediumDiv = document.createElement("div")
          mediumDiv.setAttribute("class", "character-info")
          for (let key in character) {
            const miniDiv = document.createElement("div")
            miniDiv.setAttribute("class", `${key}`)
            miniDiv.innerHTML = `<p>${key}:${character[key]}</p>`

            mediumDiv.appendChild(miniDiv)

          }
          charactersContainer.appendChild(mediumDiv)

        })

      }
      )
  }

  document.getElementById('fetch-one').onclick = function () {

    const charId = document.querySelector(".operation input").value
    charactersAPI.getOneRegister(charId)
      .then(theCharacter => {
        charactersContainer.innerText = ""
        const mediumDiv = document.createElement("div")
        mediumDiv.setAttribute("class", "character-info")
        for (let key in theCharacter) {
          const miniDiv = document.createElement("div")
          miniDiv.setAttribute("class", `${key}`)
          miniDiv.innerHTML = `<p>${key}:${theCharacter[key]}</p>`

          mediumDiv.appendChild(miniDiv)

        }
        charactersContainer.appendChild(mediumDiv)



      })


  }

  document.getElementById('delete-one').onclick = function () {

    const id = document.querySelector(".operation-delete input").value
    charactersAPI.deleteOneRegister(id)
      .then(x => charactersContainer.innerText = `tu Minion con id: ${id} se ha borrado`)



  }

  document.getElementById('edit-character-form').onsubmit = e => {
    e.preventDefault()
    const id = characterEditInputs[0].value

    const updateCharacter = {

      name: characterEditInputs[1].value,
      occupation: characterEditInputs[2].value,
      weapon: characterEditInputs[3].value,
      cartoon: characterEditInputs[4].checked  //input checkbox
    }
    console.log(updateCharacter)
    console.log(id)

    charactersAPI.updateOneRegister(id, updateCharacter)
      .then(x => {
        charactersContainer.innerText = "Se ha editado tu Minion"
        characterEditInputs[0].value = ""
        characterEditInputs[1].value = ""
        characterEditInputs[2].value = ""
        characterEditInputs[3].checked = false

      })

  }

  document.getElementById('new-character-form').onsubmit = e => {

    e.preventDefault()


    const character = {
      name: characterInputs[0].value,
      occupation: characterInputs[1].value,
      weapon: characterInputs[2].value,
      cartoon: characterInputs[3].checked  //input checkbox
    }
    charactersAPI.createOneRegister(character)
      .then(x => {
        charactersContainer.innerText = "se ha creado tu Minion"
        characterInputs[1].value = ""
        characterInputs[2].value = ""
        characterInputs[3].value = ""
        characterInputs[4].checked = false
      }
      )

  }
})
