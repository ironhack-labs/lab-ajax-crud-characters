class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

getFullList () {
      fetch("http://localhost:8000/characters")
      .then(response=>{
        if (!response.ok) return console.log(response)
        return response.json();
      })
      .then(data=>{
        console.log (data)
      })
      .catch(e=>console.log(e))
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
