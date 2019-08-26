const characterContainerDiv = document.querySelector("body > section:nth-child(1) > div");

const charInfoTemplate = '<div class="character-info"> \
<div class="name">Character Name</div> \
<div class="occupation">Character Occupation</div> \
<div class="cartoon">Is a Cartoon?</div> \
<div class="weapon">Character Weapon</div> \
</div>'

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    console.log(`Starting axios with base URL: ${this.BASE_URL}`)
  }

  getFullList() {
    console.log(`GET request at URL: ${this.BASE_URL}characters`)
    axios.get("http://localhost:8000/characters")
      .then((response) => {
        console.log(response)

        let characterHTML = ""
        response.data.map((characterInfo, i) => {
          console.log(characterInfo)
          characterHTML += `<div class="character-info">`
          characterHTML += `<div class="name">Character Name: ${characterInfo.name}</div>`
          characterHTML += `<div class="occupation">Character Occupation: ${characterInfo.occupation}</div>`
          characterHTML += `<div class="cartoon">Is a Cartoon? ${characterInfo.cartoon}</div>`
          characterHTML += `<div class="weapon">Character Weapon: ${characterInfo.weapon}</div>`
          characterHTML += `</div>`

        })
        characterContainerDiv.innerHTML = characterHTML
      })

      .catch(function (error) {
        console.log(error);
      });
  }

  getOneRegister() {
    axios.get("http://localhost:8000/characters/" + document.querySelector("body > section:nth-child(1) > section > div:nth-child(2) > input[type=text]").value)
      .then((response) => {
        console.log(response)
      })
  }

  createOneRegister() {
    const characterToCreate = {
      name: document.querySelector("input[name = 'name']").value,
      occupation: document.querySelector("input[name = 'occupation']").value,
      weapon: document.querySelector("input[name = 'weapon']").value,
      cartoon: document.querySelector("input[name = 'cartoon']").value
    }

    axios.post(`${this.BASE_URL}/characters`, characterToCreate)
      .then((character) => {
        console.log('Character creado', character)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  updateOneRegister() {
    const characterToUpdate = {
      id: document.querySelector('#edit-character-form > div:nth-child(1) > input[type=text]').value,
      name: document.querySelector('#edit-character-form > div:nth-child(2) > input[type=text]').value,
      occupation: document.querySelector('#edit-character-form > div:nth-child(3) > input[type=text]').value,
      weapon: document.querySelector('#edit-character-form > div:nth-child(4) > input[type=text]').value,
      cartoon: document.querySelector('#edit-character-form > div:nth-child(5) > input[type=checkbox]').checked
    }

    axios.post(`${this.BASE_URL}/characters/${characterToUpdate.id}`, characterToUpdate)
      .then(result => {
        console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteOneRegister() {
    console.log(document.querySelector('input[name="character-id-delete"]').value);
    axios.delete(`${this.BASE_URL}/characters/${document.querySelector('input[name="character-id-delete"]').value}`)
  }
}