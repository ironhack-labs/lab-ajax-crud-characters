class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get("http://localhost:8000/characters")
    .then(function (response) {
      return response;
    })
  }

  getOneRegister (characterId) {
    return axios.get(`http://localhost:8000/characters/${characterId}`)
    .then(function (response) {
      return response;
    })
  }

  createOneRegister (character) {
    return axios.post("http://localhost:8000/characters", character)
    .then(function (response) {
      return response;
    })
  }

  updateOneRegister (characterId, update) {
    return axios.put(`http://localhost:8000/characters/${characterId}`, update)
    .then(function (response) {
      return response;
    })
  }

  deleteOneRegister (characterId) {
    return axios.delete(`http://localhost:8000/characters/${characterId}`)
    .then(function (response) {
      return response;
    })
  }
}
