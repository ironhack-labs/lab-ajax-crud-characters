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

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)    
  }

  createOneRegister (characterInfo) {
    // e.preventDefault()
    axios.post(`${this.BASE_URL}/characters`, characterInfo)
  }

  updateOneRegister (characterInfo) {
    // e.preventDefault()
    axios.post(`${this.BASE_URL}/characters`, characterInfo)
  }

}
