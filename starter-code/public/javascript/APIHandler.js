class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get('/characters')
      .then(response => {
        return response.data;
      })
  }

  getOneRegister(id) {
    return axios.get('/characters/' + id)
      .then(response => {
        return response.data;
      })
  }

  createOneRegister(character) {
    return axios.post('/characters', character)
    .then(response => {
      return response.data;
    })
  }

  updateOneRegister(id, character) {
    return axios.patch('/characters/' + id, character)
      .then(response => {
        return response.data;
      })
  }

  deleteOneRegister(id) {
    return axios.delete('/characters/' + id)
      .then(response => {
        return response.data;
      })
  }
}