class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    axios.get(`${this.BASE_URL}/characters`)
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err)
    })
  } 

  

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
       return response.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  createOneRegister (characters) {

    if (typeof arguments === "undefined" || arguments.length === 0) throw new Error("All params are mandatory")
    console.log(characters);
    
    axios.post(`${this.BASE_URL}/characters`, characters)
    .then(response => {
        console.log('post successful and the response is: ',response );
    })
    .catch(error => {
        console.log('Oh No! Error is: ', error);  
    })
 
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
