class APIHandler {
  constructor (baseURL) {
    this.baseURL = baseURL;
  }

  getFullList () {
    return axios.get(`${this.baseURL}/characters`)
  }

  getOneRegister (id) {
    return axios.get(`${this.baseURL}/characters/${id}`)
  }

  createOneRegister (name, occupation, cartoon, weapon) {
    return axios.post(`${this.baseURL}/characters`, { name, occupation, cartoon, weapon })
  }

  updateOneRegister (id, name, occupation, cartoon, weapon) {
    return axios.put(`${this.baseURL}/characters/${id}`, { name, occupation, cartoon, weapon })
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.baseURL}/characters/${id}`)
  }
}