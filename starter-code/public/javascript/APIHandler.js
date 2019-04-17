class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`).then(characters=>{
      return characters.data
    })
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`).then(characters=>{
      console.log(characters.data)
      return characters.data
    })

  }

  createOneRegister (param) {
    return axios.post(`${this.BASE_URL}/characters`, param).then(characters=>{
      return characters.data
    })

  }

  updateOneRegister (param, id) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, param).then(characters=>{
      return characters.data})
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`).then(characters=>{
      return characters.data})

  }
}
