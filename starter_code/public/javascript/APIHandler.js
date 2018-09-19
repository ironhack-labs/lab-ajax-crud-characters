class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
return axios.get("http://localhost:8000/characters")

  }

  getOneRegister (id) {
return axios.get(`http://localhost:8000/characters/${id}`)
  }

  createOneRegister (id) {
return axios.post(`http://localhost:8000/characters/`, id)
  }

  updateOneRegister (id,object) {
return axios.post(`http://localhost:8000/characters/${id}`, object)
  }

  deleteOneRegister (id) {
return axios.delete(`http://localhost:8000/characters/${id}`)
  }
}
