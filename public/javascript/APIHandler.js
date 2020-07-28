class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    //this.BASE_URL = http://localhost:8000

    this.axiosApi = axios.create({
      baseURL: this.BASE_URL
    })
  }


  getFullList() { //Al llamar a esta función, se retorna la ejecución del código dentro.
    return this.axiosApi
      .get('/characters') //Recoje la info de la /characters
  }


  getOneRegister(id) { //Le paso el parámetro ID porque solamente es para ver uno.
    return this.axiosApi
      .get(`/characters/${id}`) //Le interpolo el ID en la URL
  }

  createOneRegister(newCharacter) { //Le paso como argumento un nuevo personaje hardcoded en index.js 
    return this.axiosApi
      .post('/characters', newCharacter) //El segundo parámetro del método post pide el objeto a añadir
  }

  updateOneRegister(id, updatedCharacter) {
    return this.axiosApi
      .patch(`/characters/${id}`, updatedCharacter)
  }

  deleteOneRegister(id) {
    return this.axiosApi
      .delete(`/characters/${id}`)
  }
}