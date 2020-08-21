class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
      
      .get(`${this.BASE_URL}/characters`)
			.then((response) => {
				console.log("Response from the API: ", response.data);
			})
			.catch((error) => {
				console.log('error of characters: ', data);
			});

  }

  getOneRegister (charactersID) {

    axios
      
      .get(`${this.BASE_URL}/characters/${characterId}`)

			.then((response) => {
				console.log("Response from the API: ", response.data);
			})
			.catch((error) => {
				console.log('error of characters: ',data);
			});

  }

  createOneRegister (newCharacter) {

    axios
      
      .post(`${this.BASE_URL}/characters`, newCharacter)
			.then((response) => {
				console.log("Response from the API: ", response.data);
			})
			.catch((error) => {
				console.log('error of characters', data);
			});
  }

  updateOneRegister (charactersID, updatedCharacter) {

    axios
      
      .put(`${this.BASE_URL}/characters/${characterId}`, editedCharacter)
			.then((response) => {
				console.log("Response from the API: ", response.data);
			})
			.catch((error) => {
				console.log('error of characters', data);
			});

  }

  deleteOneRegister (charactersID) {

    axios
      
      .delete(`${this.BASE_URL}/character/${characterId}`)
			.then((response) => {
				console.log("Response from the API: ", response.data);
			})
			.catch((error) => {
				console.log('error of characters', data);
			});

  }
}
