class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
			.get(`${this.BASE_URL}/characters`)
      .then(response => console.log('Response from API is:', response.data))
      .catch(err => console.log(`Error while getting the list of characters: ${err}`));
  }

  getOneRegister(charId) {
		axios
      .get(`${this.BASE_URL}/characters/${charId}`)
      .then(response => console.log('Response from API is:', response.data))
      .catch(err => console.log(`Error while getting character: ${err}`));
  }

  createOneRegister(newChar) {
		axios
			.post(`${this.BASE_URL}/characters`, newChar)
			.then(response => {
        console.log('Created a new character', response.data)
        this.getFullList();
      })
      .catch(err => console.log(`Error while getting character: ${err}`));
	}

	updateOneRegister(charId, editChar) {
		axios
			.put(`${this.BASE_URL}/characters/${charId}`, editChar)
			.then(response => {
        console.log("Response from the API: ", response.data)
        this.getFullList();
      })
			.catch(err => console.log(`Error while updating a character: ${err}`));
	}

	deleteOneRegister(charId) {
		axios
      .delete(`${this.BASE_URL}/characters/${charId}`)
      .then(response => {
        console.log('A character has been deleted', response.data)
        this.getFullList();
      })
      .catch(err => console.log(`Error while saving a new character: ${err}`));
	}
}
