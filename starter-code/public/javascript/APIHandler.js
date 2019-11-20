class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    // console.log("holaa")
  return axios.get(`${this.BASE_URL}/characters`)
  // 
  // });
  // console.log(axios.get(`${this.BASE_URL}/characters`))
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (character) {
    return axios.post(`${this.BASE_URL}/characters`, character)
  }

  updateOneRegister (id, character) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, character)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
