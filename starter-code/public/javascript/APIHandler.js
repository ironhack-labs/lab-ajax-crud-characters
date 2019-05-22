class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get("https://minions-api.herokuapp.com/characters")
      .then(response => printAll(response.data))
      .catch(error => console.log(error))
  }

  getOneRegister(id) {
    axios.get(`https://minions-api.herokuapp.com/characters/${id}`)

      .then(response => printOne(response.data))
      .catch(error => console.log(error))
  }

  getTheOneToEdit(id) {
    return axios.get(`https://minions-api.herokuapp.com/characters/${id}`)

      .then(response => {
        console.log(response.data)
        return response.data
      })
      .catch(error => console.log(error))
  }

  createOneRegister(newCharacter) {

    axios.post('https://minions-api.herokuapp.com/characters', newCharacter)
      .then(response => {
        console.log('post successful and the response is: ', response);
      })
      .catch(error => console.log(error))

  }

  updateOneRegister(id, updatedCharacter) {

    axios.put(` https://minions-api.herokuapp.com/characters/${id}`, updatedCharacter)
      .then(response => {
        document.getElementById("send-update-data").style.color = "#00ff16"
        printOne(response.data)
      })
      .catch(error => {
        document.getElementById("send-update-data").style.color = "red"
        console.log(error)
      })

  }

  deleteOneRegister(id) {
    axios.delete(`https://minions-api.herokuapp.com/characters/${id}`)
      .then(x => charactersAPI.getFullList())
      .catch(error => console.log(error))
  }
  // https://minions-api.herokuapp.com/characters/:id

}
