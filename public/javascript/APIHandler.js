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
      console.log("Unable to retrieve characters.");
    });
  }

  getOneRegister (characterId) {
    axios
    .get(`${this.BASE_URL}/characters/${characterId}`)
    .then((response) => {
      console.log("Response from the API: ", response.data);
  })
    .catch((error) => {
      console.log(`Unable to retrieve character with ID ${characterId}.`);
 			});
 	}

  createOneRegister(newCharacter) {
 	axios
 	.post(`${this.BASE_URL}/characters`, newCharacter)
 	.then((response) => {
 		this.getFullList();
 	})
 	.catch((error) => {
 		console.log("Unable to create character.");
 	});
  }

  updateOneRegister(characterId, editedCharacter) {
 	axios
 	.put(`${this.BASE_URL}/characters/${characterId}`, editedCharacter)
 	.then((response) => {
 		console.log("Response from the API: ", response.data);
 	})
 	.catch((error) => {
 		console.log(`Unable to update character with ID ${characterId}.`);
 	});
  }

  deleteOneRegister(characterId) {
 	axios
 	.delete(`${this.BASE_URL}/character/${characterId}`)
 	.then((response) => {
 		console.log("Response from the API: ", response.data);
 	})
 	.catch((error) => {
 		console.log(`Unable to delete character with ID ${characterId}.`);
 	});
  }
}
