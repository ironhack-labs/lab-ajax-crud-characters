class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList () {
    return this.api.get("/characters")
    .then(info => {
      return info.data
    }).catch(console.log)
  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`)
    .then(info => {
      return info.data
    }).catch(console.log)
  }

  createOneRegister (newChar) {
    return this.api.post(`/characters/`, newChar)
    .then(info => {
      return info.data
    }).catch(console.log)
  }

  updateOneRegister (id, editChar) {
    return this.api.put(`/characters/${id}`, editChar)
    .then(info => {
      return info.data
    }).catch(console.log)
  }

  deleteOneRegister (id) {
    return this.api.delete(`/characters/${id}`)
    .then(() => {
      return true
    }).catch(console.log)
  }
}
