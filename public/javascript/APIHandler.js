class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    
      return axios.get(`${this.BASE_URL}/characters`)
   
  }

  getOneRegister (id) {
    axios.get(`http://localhost:8000/characters/${id}`)
    .then((character) => {

    })
    .catch(err => console.log(err))

  }

  createOneRegister (newCharacter) {
    
    axios.post('http://localhost:8000/characters',newCharacter)
    .then((character) => {
     // console.log(characters)

    })
    .catch(err => console.log(err))

  }

  

  updateOneRegister (character) {
    axios.put(`http://localhost:8000/characters/${character.id}`,character)
    .then((character) => {
      
    })

  }

  deleteOneRegister (id) {
    axios.delete(`http://localhost:8000/characters/${id}`)
    .then()
    .catch(err => console.log(err))


  }
}
