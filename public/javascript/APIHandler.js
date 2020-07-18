class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get('http://localhost:8000/characters')
      .then(chars => console.log(chars.data))
      .catch(err => console.log(err))
  }

  getOneRegister (id) {
    axios.get(`http://localhost:8000/characters/${id}`)
      .then(oneChar => console.log(oneChar.data))
      .catch(err => console.log(err))
  }

  createOneRegister () {
    
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
