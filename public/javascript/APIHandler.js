class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({baseUrl})
  }

  getFullList () {
    return this.api.get("/characters")
  
  

    // axios({
    //   method: 'get',
    //   url: 'http://localhost:8000/characters',
    // })
    // .then( res => console.log(res.data))
    // .catch(err => console.error(err))

  }

  getOneRegister () {
// I want to do this 
    //   http://localhost:8000/characters/1...
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
