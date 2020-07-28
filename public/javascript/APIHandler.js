class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;

    this.axiosApi = axios.create({
      baseURL: `http://localhost:8000`
    })
  }

  getFullList() {
    return this.axiosApi
      .get('/characters')
  }

  getOneRegister(id) {
    return this.axiosApi
      .get(`/characters/${id}`)
  }

  createOneRegister(newCharacter) {
    return this.axiosApi
      .post('/characters', newCharacter)
      .then(responseFromApi => {
        console.log('New character created', responseFromApi.data)
      })
      .catch(err => console.log('Error while creating the character', err))
  }

  updateOneRegister(id, updatedCharacterInfo) {
    return this.axiosApi
      .patch(`/characters/${id}`, updatedCharacterInfo)
      .catch(err => console.log('Error while editing the character', err))
  }

  deleteOneRegister(id) {
    return this.axiosApi
      .delete(`/characters/${id}`)
  }
}