class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister() {
    axios.post(`/characters`, (req.body))
  }

  updateOneRegister(id, updateWithThisData) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, updateWithThisData)
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}