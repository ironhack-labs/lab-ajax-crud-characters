class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    
  }

  getFullList () {
   return axios.get(this.BASE_URL + "/characters")
               .then(responseFromAPI =>responseFromAPI.data)
       
  }

  getOneRegister (id) {
   return axios.get(this.BASE_URL + "/characters/" + id)
         .then(responseFromAPI => responseFromAPI.data)
        
  }

  createOneRegister (body) {
   return axios.post(this.BASE_URL + "/characters/" + body)
    .then(responseFromAPI => console.log(responseFromAPI.data))
    
  }

  updateOneRegister (id, body) {
       
  return axios.patch(this.BASE_URL + "/characters/" + id, charInfo)
         .then(response => {
          console.log('update successful: ', response)})
       
         
  }

  deleteOneRegister (id) {
   return axios.delete(this.BASE_URL + "/characters/" + id)
    .then(responseFromAPI => console.log(responseFromAPI.data))
  }
}


