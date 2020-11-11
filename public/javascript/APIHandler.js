const baseURL = "http://localhost:8000/characters"
const singleChar = "http://localhost:8000/characters/:id"
const $charList = document.querySelector(".character-info")

const $createForm = document.querySelector("#new-character-form")
const $updateForm = document.querySelector("#edit-character-form")
const $fetchAll = document.querySelector("fetch-all")
const $getCharInput = document.querySelector("#charid")
const $getChatBtn = document.querySelector("#get-char-data")


class APIHandler {
  constructor (baseUrl, singleChar) {
    this.BASE_URL = baseUrl;
    this.singleChar = singleChar;
  }

  getFullList (arr) {
    $charList.innerHTML = ""
    arr.forEach(el => {
      $charList.innerHTML += `
      Character Name: ${name}
      Occupation: ${occupation}
      Is a Cartoon: ${cartoon}
      Character Weapon: ${weapon}`
    })
  }

  getOneRegister () {
    function getCharacters() {
      axios.get(baseURL).then(({ data }) => {
        getFullList(data)
      })
    }
  }

  createOneRegister () {
    $createForm.onsubmit = async event => {
      event.preventDefault()
    
      const { target } = event
      const name = target[0].value
      const occupation = target[1].value
      const weapon = target[2].value
    
      await axios.post(baseURL, {
        name,
        occupation,
        is a cartoon,
        weapon
      })
    
      target[0].value = ""
      target[1].value = ""
      target[2].value = ""
    
      getCharacters()
    }
  }

  updateOneRegister () {
    $updateForm.onsubmit = async e => {
      e.preventDefault()
    
      const { target } = e
      const name = target[0].value
      const occupation = target[1].value
      const weapon = target[2].value
      const isacartoon = target[3].value
      const id = $getCharInput.value
    
      await axios.patch(`${singleChar}`, { name, occupation, weapon, isacartoon })
    
      $getCharInput.value = ""
      target[0].value = ""
      target[1].value = ""
      target[2].value = ""
      target[3].value = ""
    
      getCharacters()
    }
  }

  deleteOneRegister () {
    async function deleteElement(id) {
      await axios.delete(`${singleChar}`)
      getCharacters()
    }
  }
}
