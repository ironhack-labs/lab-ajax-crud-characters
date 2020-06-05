class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(this.BASE_URL + '/characters')
      .then(response => {
        console.log(response.data)
      })
      .catch(err => console.log(`Error while retrieving the full list of characters : ${err}`))
  }

  getOneRegister(id) {
    axios.get(this.BASE_URL + '/characters/' + id)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => console.log(`Error while retrieving the character ${id} : ${err}`))
  }

  createOneRegister(newCharacter) {
    axios.post(this.BASE_URL + '/characters', newCharacter)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => console.log(`Error while creating the character: ${err}`))
  }

  updateOneRegister(id, updatedCharacter) {
    axios.put(this.BASE_URL + '/characters/' + id, updatedCharacter)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => `Error while updating the character ${id}: ${err}`)
  }

  deleteOneRegister(id) {
    axios.delete(this.BASE_URL + '/characters/' + id)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => console.log(`Error while deleting the character ${id}: ${err}`))
  }
}