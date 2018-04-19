class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then( res => res.data)
    //.catch( err => console.log (err)) 
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then( res => res.data)
  }

  createOneRegister (character) {
   axios.post(`${this.BASE_URL}/characters`, character)
          .then(function(response) {
           console.log(response);
          })
        .catch(function(error) {
            console.log(error);
   });
  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
  //   return axios.delete(`${this.BASE_URL}/characters/${id}`)
  //         .then( res => res.data)
   }


}
