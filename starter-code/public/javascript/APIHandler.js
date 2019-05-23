class APIHandler {
  constructor (baseUrl) {

    this.BASE_URL = baseUrl

  }

  ////
  getFullList () {
    
    axios.get(this.BASE_URL)
    .then(responseFromAPI => {
       
        console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
    })
  }

 /////
  getOneRegister (character) {
      axios.get(`${this.BASE_URL}/${character}`)
      .then(responseFromAPI => {
        const { id, name, occupation } = responseFromAPI.data
          console.log('Response from API is: ', id, name, occupation);           
  })
  .catch(err => {
      console.log('Error is: ', err);
      })
  }
    

  ////
  createOneRegister (character) {
    
  axios.post( this.BASE_URL, character)
      .then(responseFromAPI => {
        
        const { id, name, occupation } = responseFromAPI.data
        console.log(`Just created a character with this Id:${id} and this name:${name}, and this ${occupation}`)

      })
      .catch(error => console.log('¡ops! error:', error))

    
  }
///
  updateOneRegister (character) {

    axios.patch(`${this.BASE_URL}/${character}`, character)


      .then(responseFromAPI => {
        
        const { id, name, occupation } = responseFromAPI.data
        console.log(`Just updated a character with this Id:${id} and this name:${name}, and this ${occupation}`)

      })
      .catch(error => console.log('¡ops! error:', error))

  }
////
  deleteOneRegister (character) {

    axios.delete(`${this.BASE_URL}/${character}`)


    .then(responseFromAPI => {
      
      const { id, name, occupation } = responseFromAPI.data
      console.log(`Just deleted a character with this Id:${id} and this name:${name}, and this ${occupation}`)

    })
    .catch(error => console.log('¡ops! error:', error))

}


  }


const apihandler = new APIHandler("https://minions-api.herokuapp.com/characters")