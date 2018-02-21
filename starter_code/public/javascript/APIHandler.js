class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL + "/characters")
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log(err)
    })

  }

  getOneRegister () {
    const id = document.getElementById("charatid").value
    axios.get(this.BASE_URL + `/characters/${id}`)    
    .then(response => {    
    console.log(response.data)  
    })
    .catch(err => {  
    console.log(err)  
    })
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
