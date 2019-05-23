const charactersAPI = new APIHandler("https://minions-api.herokuapp.com")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

    const container = document.querySelector('.characters-container')
    const charID = document.querySelector('#character-id')

    charactersAPI.getFullList()
      .then(allCharacters => {
        container.innerHTML = ""

        allCharacters.map(character => {

          const createDiv = document.createElement('createDiv')

          createDiv.setAttribute('class', 'character-info')
          for (const key in character) {
            const createSmallDiv = document.createElement('createDiv')

            createSmallDiv.setAttribute("class", `${key}`)
            createSmallDiv.innerHTML = `<p>${key}: ${character[key]}</p>`
            div.appendChild(createSmallDiv)
          }
          container.appendChild(createDiv)




          // if (object.hasOwnProperty(key)) {
          //   const element = object[key];

          // }
        })
      })
  }

  document.getElementById('fetch-one').onclick = function () {

    charactersAPI.getOneRegister(characterId.value)
      .then(character => {

        if (character) {
          container.innerHTML = ""
          const createDiv = document.createElement("createDiv")
          div.setAttribute("class", "character-info")
          for (let key in character) {


            const createSmallDiv = document.createElement("createDiv")
            createSmallDiv.setAttribute("class", `${key}`)
            createSmallDiv.innerHTML = `<p>${key}: <p class="color">${character[key]}</p> </p>`
            div.appendChild(createSmallDiv)
            document.getElementById('fetch-one').style.backgroundColor = "green"
            setTimeout(() => {
              document.getElementById('fetch-one').style.backgroundColor = ""
              characterId.value = ""
            }, 500)


          }
          container.appendChild(div)

        } else {
          container.innerHTML = ""

          const createDiv = document.createElement("createDiv")
          createSmallDiv.setAttribute("class", "character-info")

          const createSmallDiv = document.createElement("createDiv")
          createSmallDiv.innerText = "No character with selected #id"
          createSmallDiv.appendChild(createSmallDiv)
          container.appendChild(createSmallDiv)
          document.getElementById('fetch-one').style.backgroundColor = "red"
          setTimeout(() => {
            document.getElementById('fetch-one').style.backgroundColor = ""
            characterId.value = ""
          }, 500)
        }
      })

  }

  document.getElementById('delete-one').onclick = function () {

  }

  document.getElementById('edit-character-form').onsubmit = function () {

  }

  document.getElementById('new-character-form').onsubmit = function () {

  }
})










// const delCharID = document.querySelector(#character - id)