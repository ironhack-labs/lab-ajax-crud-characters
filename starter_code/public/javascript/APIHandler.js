class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get('http://localhost:8000/characters')
  }

  getOneRegister () {
    return axios.get('http://localhost:8000/characters/:id')
  }

  createOneRegister () {
    return axios.post('http://localhost:8000/characters')
  }

  updateOneRegister () {
    return axios.put('http://localhost:8000/characters/:id')
  }

  deleteOneRegister () {

  }
}
  