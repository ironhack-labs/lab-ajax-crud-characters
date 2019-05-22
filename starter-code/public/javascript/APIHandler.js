class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
    this.minionAPI = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    this.minionAPI.get('/characters')
      .then(response => console.log(response.data))
      .catch(err => console.log(err))

  }

  getOneRegister(id) {
    this.minionAPI.get(`/characters/${id}`)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  }

  createOneRegister(name, occupation, weapon, cartoon) {

    this.minionAPI.post('/characters', {
        name,
        occupation,
        weapon,
        cartoon
      })
      .then(response => console.log(response.data))
      .catch(err => console.log(err))

  }

  updateOneRegister(id) {
    this.minionAPI.put(`/characters/${id}`)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  }

  deleteOneRegister(id) {
    this.minionAPI.delete(`/characters/${id}`)
      .then(response => console.log(response.data))
      .catch(err => console.log(err))
  }
}