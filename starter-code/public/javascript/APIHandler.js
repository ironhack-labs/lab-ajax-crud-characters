class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters')
    .then(response => response.data)
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + `/characters/${id}`)
    .then(response => response.data)
  }
  createOneRegister (charInfo) {
    return axios.post(this.BASE_URL + '/characters', charInfo)
    .then(response => response.data)
  }
  updateOneRegister (id, charInfo) {
    return axios.put(this.BASE_URL + `/characters/${id}`, charInfo)
    .then(response => response.data)
  }
  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + `/characters/${id}`)
    .then(response => response.data)
  }
}
