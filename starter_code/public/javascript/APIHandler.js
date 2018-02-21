class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL+"characters")
    .then(response => {
      return response.data;
  })
  .catch(err => {
    console.error(err)
  })
 
  }

  getOneRegister (id) {
    axios.get(this.BASE_URL+`characters/`+id)
    .then(response => {
      return response.data;
  })
  .catch(err => {
    console.error(err)
  })
  }

  createOneRegister () {
    
    const characterInfo = {
      name: $("#name").val() ,
      occupation: $("#occupation").val(),
      weapon: $("#weapon").val(),
      debt: $("#debt").val() 
    };

    axios.post(this.BASE_URL+`characters/`, characterInfo)
    axios.post
    .then(response => {
        console.log('post success');
        console.log(response)
    })
    .catch(error => {
        console.log('Oh No! Error!');  
        console.log(error)
    })

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
