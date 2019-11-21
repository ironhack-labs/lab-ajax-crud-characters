class APIHandler {
  constructor(baseUrl) {
    this.CharactersURL = axios.create({
      baseURL: baseUrl
    })
  }

  getFullList() {
    this.CharactersURL.get(`characters`)
      .then(response => {
        console.log("Response API", response.data);
      })
  }

  getOneRegister(id) {
    const id = inputs[4].value
    this.CharactersURL.get(`/characters/${id}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      });
  }

  createOneRegister(id, char) {
    this.CharactersURL.post(`/characters/${id}`, char)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      });
  }

  updateOneRegister(id, char) {
    this.CharacterURL.put(`/characters/${id}`, char)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      });
  }

  deleteOneRegister(id) {
    this.CharacterURL.delete(`/characters/${id}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      });
  }
}