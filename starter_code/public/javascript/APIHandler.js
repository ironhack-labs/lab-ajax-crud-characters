class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () { 
    axios.get(this.BASE_URL + "/characters")
    .then(marilyn => {
      console.log(marilyn.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  getOneRegister () {
    axios.get(this.BASE_URL + "characters/:id")
    .then(response => {
      console.log("Update SUCCESS!")
    })
    .catch(error => {
      console.log(error)
    })

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
