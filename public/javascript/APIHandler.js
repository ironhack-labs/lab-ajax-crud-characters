class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

    this.axiosAPI = axios.create({baseURL:'http://localhost:8000'});
  }

  getFullList () {
    //Axios.get, con el argumento URL proviniente de BASE_URL, esto devuelve una promesa (then y catch).
    return this.axiosAPI.get('/characters')
    
  }

  getOneRegister (id) {
    return this.axiosAPI.get(`/characters/${id}`)
  }

  createOneRegister (newCharacter) {
    return this.axiosAPI.post(`/characters`, newCharacter)
  }
  
  updateOneRegister (id, editCharacter) {
    return this.axiosAPI.patch(`/characters/${id}`, editCharacter)
  }
  
  deleteOneRegister (id) {
    return this.axiosAPI.delete(`/characters/${id}`)
  }
}
