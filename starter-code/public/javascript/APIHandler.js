class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(res => {
        return res.data
      })
  };


  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(res => {
        return res.data
      })
  };


  createOneRegister (character) {
    return axios.post(`${this.BASE_URL}/characters/`, character)
      .then(res => {
        return res.data
      })
  }

  updateOneRegister (id, character) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, character)
      .then(res => {
        return res.data
      })
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(res => {
        return res.data
      })
  }
}
