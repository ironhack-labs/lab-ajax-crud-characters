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

  createOneRegister (newCharacter) {
    return axios.post(this.BASE_URL + '/characters', newCharacter)
      .then(response => response.data)
  }

  updateOneRegister (id, modifiedCharacter) {
    return axios.patch(this.BASE_URL + `/characters/${id}`, modifiedCharacter)
      .then(response => response.data)
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + `/characters/${id}`)
      .then(response => response.data)
  }
}
