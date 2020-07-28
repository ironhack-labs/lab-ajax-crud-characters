class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;

    this.axiosApi = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList() {
    return this.axiosApi
      .get('/characters')
      .then(responseFromApi => {
        console.log('Response from API is:', responseFromApi.data)
      })
      .catch(err => console.log('Error while getting full list', err))
  }

  getOneRegister(id) {
    return this.axiosApi
      .get(`/characters/${id}`)
      .then(responseFromApi => {
        console.log('The single character is:', responseFromApi)
      })
      .catch(err => console.log('Error while getting one register', err))
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
      .then(responseFromApi => responseFromApi.data)
      .catch(err => console.log('Error while deleting the character'))
  }
}