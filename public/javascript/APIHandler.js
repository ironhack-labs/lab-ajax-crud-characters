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

  createOneRegister (data) {
    return axios.post(`/characters`, data)
  }

  updateOneRegister (data, id) {
    return axios.put(`/characters/${id}`, data)
  }

  deleteOneRegister (id) {
    return axios.delete(`/characters/${id}`)
  }
}
