
class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl || 'http://localhost:8000';
    this.api = axios.create(
      {
        baseURL: this.BASE_URL
      }
    )
  }

  getFullList() {
    return axios.get('http://localhost:8000/characters')
      .then(responseFromApi => {
        return responseFromApi
      })
      .catch(err => console.log(err))
  }

  getOneRegister(charId) {
    return this.api.get(`/characters/${charId}`)
  }

  createOneRegister(bodyWithCharValues) {
    return this.api.post("/characters", bodyWithCharValues)
  }

  updateOneRegister(charId) {
    return this.this.api.put(`/characters/${charId}`)
  }

  deleteOneRegister(charId) {
    return this.api.delete(`/characters/${charId}`)
  }
}

// module.exports = APIHandler