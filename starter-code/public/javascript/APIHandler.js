class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {
    return axios.get(this.BASE_URL)
      .then(response => response.data)

  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/${id}`)
      .then(response => response.data)
  }

  createOneRegister(character) {
    return axios.post(this.BASE_URL, character)
      .then(response => response.data)
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/${id}`)
  }

  updateOneRegister(id, characterUpdated) {
    return axios.put(`${this.BASE_URL}/${id}`, characterUpdated)
      .then(response => response.data)
  }

}
