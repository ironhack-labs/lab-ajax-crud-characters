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
      .then(responseFromApi => { //La devuelve en un console.log para ver que funcione
        console.log('Response from API is:', responseFromApi.data)
      })
      .catch(err => console.log('Error while getting full list', err))
  }


  getOneRegister(id) { //Le paso el parámetro ID porque solamente es para ver uno.
    return this.axiosApi
      .get(`/characters/${id}`) //Le interpolo el ID en la URL
      .then(responseFromApi => {
        console.log('Response from API for one character is', responseFromApi.data)
      })
      .catch(err => console.log('Error while displaying one charactr', err))
  }

  createOneRegister(newCharacter) { //Le paso como argumento un nuevo personaje hardcoded en index.js 
    return this.axiosApi
      .post('/characters', newCharacter) //El segundo parámetro del método post pide el objeto a añadir
      .then(responseFromApi => {
        console.log('Created a new character', responseFromApi.data)
      })
      .catch(err => console.log('Error while creating a new character', err))

  }

  updateOneRegister(id, updateCharacter) {
    return this.axiosApi
      .patch(`/characters/${id}`, updateCharacter)
      .then(responseFromApi => {
        console.log(`Character ${id} has been edited`, responseFromApi.data)
      })
      .catch(err => console.log('Error while editing a character', err))
  }

  deleteOneRegister(id) {
    return this.axiosApi
      .delete(`/characters/${id}`)
      .then(responseFromApi => {
        console.log('A character has been deleted', responseFromApi.data)
      })
      .catch(err => console.log('Error while deleting a character', err))
  }
}