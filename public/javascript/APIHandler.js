class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

    this.axiosAPI = axios.create({baseURL:'http://localhost:8000'});
  }

  getFullList () {

    return this.axiosAPI.get('/characters')

  }

  getOneRegister () {

  getOneRegister (id) {
    return this.axiosAPI.get(`/characters/${id}`)
  }

  createOneRegister () {

  createOneRegister (newCharacter) {
    return this.axiosAPI.post(`/characters`, newCharacter)
  }

  updateOneRegister () {

  
  updateOneRegister (id, editCharacter) {
    return this.axiosAPI.patch(`/characters/${id}`, editCharacter)
  }

  deleteOneRegister () {

  
  deleteOneRegister (id) {
    return this.axiosAPI.delete(`/characters/${id}`)
  }
}