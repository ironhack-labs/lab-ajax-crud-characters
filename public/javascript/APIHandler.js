class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosAPI = axios.create({ baseURL: this.BASE_URL })
  }

  getFullList() {
    return this.axiosAPI.get('/characters')
      .then(responseFromAPI => responseFromAPI.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  getOneRegister(id) {
    return this.axiosAPI.get(`/characters/${id}`)
      .then(responseFromAPI => responseFromAPI.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  createOneRegister(newCharacter) {
    return this.axiosAPI.post('/characters', newCharacter)
      .then(responseFromAPI => responseFromAPI.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  updateOneRegister(id, updatedCharacter) {
    this.axiosAPI.put(`/characters/${id}`, updatedCharacter)
      .then(responseFromAPI => responseFromAPI.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  deleteOneRegister(id) {
    this.axiosAPI.delete(`/characters/${id}`)
      .then(responseFromAPI => responseFromAPI.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }
}
