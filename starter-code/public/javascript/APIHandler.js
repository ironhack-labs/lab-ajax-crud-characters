class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;  
    
    
/*Get a single character info from http://localhost:8000/characters/:id
Create a single character posting the data to http://localhost:8000/characters
Delete a single character through his id in http://localhost:8000/characters/:id
Edit a single character through his id in http://localhost:8000/characters/:id*/
  }

  getFullList () {
    
     return axios.get(this.BASE_URL+"/characters")
      .then(responseFromAPI => responseFromAPI.data )
      .catch(err => {
          console.log("err => ", err);
      })
  }
  

  getOneRegister (val) {

    return axios.get(this.BASE_URL+`/characters/`+val)
    .then(responseFromAPI => responseFromAPI.data )
    .catch(err => {
        console.log("err => ", err);
    })

  }

  createOneRegister () {
    return axios.post(this.BASE_URL+"/characters")
      .then(responseFromAPI => responseFromAPI.data )
      .catch(err => {
          console.log("err => ", err);
      })
  }

  updateOneRegister (val, updatedData) {
    return axios.patch(this.BASE_URL+`/characters/`+val, updatedData)
    .then(responseFromAPI => responseFromAPI.data )
    .catch(err => {
        console.log("err => ", err);
    })
  }

  deleteOneRegister (val) {

    return axios.delete(this.BASE_URL+`/characters/`+val)
      .then(responseFromAPI => responseFromAPI.data )
      .catch(err => {
          console.log("err => ", err);
      })
  }
}
