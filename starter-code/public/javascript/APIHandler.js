class APIHandler {
  constructor(baseUrl) {
      this.BASE_URL = baseUrl;
  }

  getFullList() {
      return axios.get(this.BASE_URL)

  }

  getOneRegister(id) {
      return axios.get(this.BASE_URL + `/${id}`)

  }

  createOneRegister(valor) {
      return axios.post(this.BASE_URL, valor)
  }

  updateOneRegister(id, valor) {
      return axios.patch(this.BASE_URL + `/${id}`, valor)
  }

  deleteOneRegister(id) {
      return axios.delete(this.BASE_URL + `/${id}`)
  }
}
// Get all the characters info from http://localhost:8000/characters
// Get a single character info from http://localhost:8000/characters/:id
// Create a single character posting the data to http://localhost:8000/characters
// Delete a single character through his id in http://localhost:8000/characters/:id
// Edit a single character through his id in http://localhost:8000/characters/:id

