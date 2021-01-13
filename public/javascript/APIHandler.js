class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + '/characters')
      .then((responseFromApi) => {
        const data = responseFromApi.data;
      })
      .catch((error) => console.log(`There was an error while getting all of the characters: ${error}`));
  }

  getOneRegister() {
    axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then((responseFromApi) => {
        const data = responseFromApi.data;
      })
      .catch((error) => console.log(`There was an error while getting the character: ${error}`));
  }

  createOneRegister() {
    axios
    .post(this.BASE_URL + '/characters', newCharacter)
    .then()
    .catch((error) => console.log(`There was an error while creating the character: ${error}`));
  }

  updateOneRegister() {
    axios
    .put(this.BASE_URL + `/characters/${id}`)
    .then()
    .catch((error) => console.log(`There was an error while updating the character: ${error}`));
  }

  deleteOneRegister() {
    axios
    .delete(this.BASE_URL + `/characters/${id}`)
    .then()
    .catch((error) => console.log(`There was an error while deleting the character: ${error}`));
  }
}

