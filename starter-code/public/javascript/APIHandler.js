class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
        .then(character => {
          console.log(character.data)
          // return characters.data
        })
        .catch(error => {
          console.log("The error is:", error)
        })
  }



  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
        .then( character => {
          console.log(character.data)
          //  return character.data
        })
        .catch(error => {
          console.log("The error is:", error)
        })

  }

  createOneRegister (characterInfo) {
    axios.post(`${this.BASE_URL}/characters`, characterInfo)
        .then ( character => {
          console.log(character.data)
          return character.data
        })
        .catch(error => {
          console.log("The error is:", error)
        })

  }

  updateOneRegister (editCharacterInfo) {
    axios.patch(`${this.BASE_URL}/characters/${editCharacterInfo.id}`, editCharacterInfo)
        .then (character => {
          document.getElementById("edit-character-form").reset();
          return character.data
        })
        .catch(error => {
          console.log("The error is:", error)
        })
  }

  deleteOneRegister (deleteId) {
    axios.delete(`${this.BASE_URL}/characters/${deleteId}`)
        .then (character => {
          return character.data
        })
        .catch(error => {
          console.log("The error is:", error)
        })

  }
}
