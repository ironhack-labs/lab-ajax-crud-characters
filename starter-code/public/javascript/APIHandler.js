class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    // const charactersApi = axios.create({
    //   baseURL: 'http://localhost:8000/characters/'
    // });
    
    //function getCharactersInfo(theName) {
    axios.get(`${this.BASE_URL}/characters`)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
    //}
  }

  getOneRegister(event) {
   
    axios.get(`${this.BASE_URL}/characters/`+ event)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
      })

  }

  createOneRegister (newCharacter) {
    axios.post(`${this.BASE_URL}/characters`, newCharacter)
      .then(response => {
            console.log('Create successfull and the response is: ',response );
            document.getElementById("new-character-form").reset();
       })
       .catch(error => {
        console.log('Oooo! Error is: ', error);  
    })
}

  updateOneRegister (charId, editCharacter) {
    axios.patch(`${this.BASE_URL}/characters/` + charId , editCharacter)
    .then(response => {
      console.log('Update successfull and the response is: ',response );
      document.getElementById("edit-character-form").reset();
    })
    .catch(error => {
      console.log('Oooo! Error is: ', error);  
    })
  }

  deleteOneRegister (e) {
    axios.delete(`${this.BASE_URL}/characters/`+ e)
      .then(responseFromAPI => {
          console.log('Response from API is: ', responseFromAPI.data);           
    })
    .catch(err => {
      console.log('Error is: ', err);
      })
  }
}
