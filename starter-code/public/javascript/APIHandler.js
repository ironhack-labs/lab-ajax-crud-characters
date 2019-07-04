class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (value) {
    return axios.post(`${this.BASE_URL}/characters/`, value)
  }

  updateOneRegister (id, valor) {
    axios.patch(`${this.BASE_URL}/characters/${id}`, valor)
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`, { data: id })
      .then(test => {
        console.log(test)
      })
      .catch(err => log)
  }
}
