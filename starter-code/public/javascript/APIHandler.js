class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
   return  axios.get('http://localhost:8000/characters')
  }

  getOneRegister (idCharacter) {
    return axios.get('http://localhost:8000/characters/' + idCharacter )
  }

  createOneRegister (characterNew) {
    return axios.post('http://localhost:8000/characters',characterNew)

  }

  updateOneRegister (idCharacter,update) {
    console.log(update)
    return  axios.put('http://localhost:8000/characters/' + idCharacter,update)
     
  }

  deleteOneRegister (idCharacter) {
    return axios.delete('http://localhost:8000/characters/' + idCharacter )
  }
}
