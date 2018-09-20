class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}

axios.get("http://localhost:8000/characters")
.then(response=>{
    console.log (response.data)
    
})
.catch(error=>{
    console.log (error)
})

