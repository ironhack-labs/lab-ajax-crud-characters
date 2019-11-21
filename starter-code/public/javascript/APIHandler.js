class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => {
        //console.log(response.data)
        return response.data
      })
  }

  getOneRegister() {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        //console.log(response.data)
        return response.data
      })
  }

  createOneRegister(character) {
    return axios.get(`${this.BASE_URL}/characters`, character)
      .then(response => {
        //console.log(response.data)
        return response.data
      })
  }

  updateOneRegister(id, character) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, character)
      .then(response => {
        //console.log(response.data)
        return response.data
      })
  }

  deleteOneRegister() {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        //console.log(response.data)
        return response.data
      })
  }
}