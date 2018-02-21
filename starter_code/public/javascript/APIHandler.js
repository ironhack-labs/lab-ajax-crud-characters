class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () { 
    axios.get(this.BASE_URL + "/characters")
    .then(result => {
      console.log(result.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  getOneRegister () {
    const charId = document.getElementById("char-id").value;
    axios.get(this.BASE_URL + `/characters/${charId}`)
    .then(result => {
       console.log(result.data)
      })
    .catch(error => {
     console.log(error);
  })
 
 }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {
    const charId = document.getElementById("chAr-id").value;
    axios.delete(this.BASE_URL + `/characters/${charId}`)
    .then(result => {
       console.log(result.data)
      })
    .catch(error => {
     console.log(error);
  })
  }
}
