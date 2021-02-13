class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
    axios.defaults.baseURL = this.BASE_URL
  }

  getFullList () {
    return axios.get(`/characters`)
  }

  getOneRegister (id) {
    return axios.get(`/characters/${id}`)
  }

  createOneRegister () {
    return axios.post(`/characters/${id}`, body)
  }

  updateOneRegister () {
    return axios.put(`/characters/${id}`, body)
  }

  deleteOneRegister () {
    return axios.delete(`/characters/${id}`)
  }
}
