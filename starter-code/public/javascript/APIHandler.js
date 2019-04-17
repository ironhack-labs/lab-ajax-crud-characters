class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(`${this.BASE_URL}/characters`).then(characters=>{
      res.json(characters)
    })
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(characters=>{
      res.json(characters)
    })

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
