const charactersAPI = new APIHandler('http://localhost:8000/characters');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async (event) => {
    const {
      data
    } = await charactersAPI.getFullList('/')
    document.querySelector('.characters-container').innerHTML = ""
    data.forEach(character => {
      const divContainer = document.createElement("div")
      divContainer.classList.add("character-info")
      const divName = document.createElement("div")
      divName.textContent = character.name
      divName.classList.add("name")
      const divOcc = document.createElement("div")
      divOcc.textContent = character.occupation
      divOcc.classList.add("occupation")
      const divCar = document.createElement("div")
      divCar.textContent = character.cartoon
      divCar.classList.add("cartoon")
      const divWea = document.createElement("div")
      divWea.textContent = character.weapon
      divWea.classList.add("weapon")
      divContainer.appendChild(divName)
      divContainer.appendChild(divOcc)
      divContainer.appendChild(divCar)
      divContainer.appendChild(divWea)
      document.querySelector("div.characters-container").appendChild(divContainer)
    })
  });

  document.getElementById('fetch-one').addEventListener('click', async (event) => {
    try {
      const val = document.querySelector('input[name="character-id"]').value
      const {
        data: character
      } = await charactersAPI.getOneRegister(val)
      document.querySelector('.characters-container').innerHTML = ""
      document.getElementById('fetch-one').style.backgroundColor = "green"
      const divContainer = document.createElement("div")
      divContainer.classList.add("character-info")
      const divName = document.createElement("div")
      divName.textContent = character.name
      divName.classList.add("name")
      const divOcc = document.createElement("div")
      divOcc.textContent = character.occupation
      divOcc.classList.add("occupation")
      const divCar = document.createElement("div")
      divCar.textContent = character.cartoon
      divCar.classList.add("cartoon")
      const divWea = document.createElement("div")
      divWea.textContent = character.weapon
      divWea.classList.add("weapon")
      divContainer.appendChild(divName)
      divContainer.appendChild(divOcc)
      divContainer.appendChild(divCar)
      divContainer.appendChild(divWea)
      document.querySelector("div.characters-container").appendChild(divContainer)
    } catch {
      document.getElementById('fetch-one').style.backgroundColor = "red"
    }
  });

  document.getElementById('delete-one').addEventListener('click', async (event) => {
    const val = document.querySelector('input[name="character-id-delete"]').value
    try {
      await charactersAPI.deleteOneRegister(val)
      document.getElementById('delete-one').style.backgroundColor = "green"
    } catch {
      document.getElementById('delete-one').style.backgroundColor = "red"
    }
  })


  document.getElementById('edit-character-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const id = document.querySelector('input[name="chr-id"]').value
    const name = document.querySelector('#edit-character-form input[name="name"]').value
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value
    const checkBox = document.querySelector('#edit-character-form input[name="cartoon"]').checked

    try {
      await charactersAPI.updateOneRegister(id, {
        name,
        occupation,
        weapon,
        checkBox
      })
      document.querySelector('#edit-character-form button[id="send-data"]').style.backgroundColor = "green"
    } catch {
      document.querySelector('#edit-character-form button[id="send-data"]').style.backgroundColor = "red"
    }
  });

  document.getElementById('new-character-form').addEventListener('submit', async (event) => {
    event.preventDefault()
    const name = document.querySelector('#new-character-form input[name="name"]').value
    const occupation = document.querySelector('#new-character-form input[name="occupation"]').value
    const weapon = document.querySelector('#new-character-form input[name="weapon"]').value
    const checkBox = document.querySelector('#new-character-form input[name="cartoon"]').checked
    try {
      await charactersAPI.createOneRegister({
        name,
        occupation,
        weapon,
        checkBox
      })
      document.querySelector('#new-character-form button[id="send-data"]').style.backgroundColor = "green"
    } catch {
      document.querySelector('#new-character-form button[id="send-data"]').style.backgroundColor = "red"

    }



  });
});