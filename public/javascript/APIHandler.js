class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosAPI = axios.create({
      baseURL:'http://localhost:8000'});
  }

  getFullList () {

    return this.axiosAPI.get('/characters')
  }

  getOneRegister () {

    return this.axiosAPI.get(`/characters/${id}`)
  }

  createOneRegister (newCharacter) {

    return this.axiosAPI.post(`/characters`, newCharacter)
  }

  updateOneRegister (updateCharacter) {

    return this.axiosAPI.put(`/characters/${id}`, updateCharacter)
  }

  deleteOneRegister () {

    return this.axiosAPI.delete(`/characters/${id}`)

  }
}
