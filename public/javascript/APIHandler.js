class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then(response => {
      console.log('Response from the API: ', response);
      const data = response.data;
      console.log('The array of characters: ', data);
    })
    .catch(err => console.log(`Error while getting the list of characters: ${err}`));

  }

  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log('Response from the API: ', response);
      const data = response.data;
      console.log('The array of characters: ', data);
    })
    .catch(err => console.log(`Error while getting the list of characters: ${err}`));
  }

  createOneRegister (newCharacterInfo) {
    axios
    .post(`${this.BASE_URL}/characters`, newCharacterInfo)
    .then(() => {
     this.getFullList();
    
    })
    .catch(err => console.log(`Error while creating new character: ${err}`));
  }

  updateOneRegister (updateCharacterInfo,id) {
    axios
    .put(`${this.BASE_URL}/characters/${id}`, updateCharacterInfo)
    .then(response => {
      console.log(response);
      this.getFullList();
    })
    .catch(error => console.log(`Error while updating a character: ${error}`));

  }

  deleteOneRegister (id) {
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      this.getFullList();
    })
    .catch(err => console.log(`Err while deleting character: ${err}`));
  }
}
