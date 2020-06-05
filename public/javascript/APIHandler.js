class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(response => {
        console.log('Response from the API: ', response);
        const data = response.data;
        console.log('The array of characters: ', data);
        return data;
      })
      .catch(err => {
        console.log(`Error while getting the list of characters: ${err}`);
        throw err;
      });
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        console.log('Response from the API: ', response);
        const data = response.data;
        console.log('The array of the character: ', data);
        return data;
      })
      .catch(err => {
        console.log(`Error while getting the character: ${err}`);
        throw err;
      });
  }

  createOneRegister(newCharacterInfo) {
    return axios
      .post(`${this.BASE_URL}/characters`, newCharacterInfo)
      .then(() => {
        this.getFullList();
      })
      .catch(err => {
        console.log(`Error while creating new character: ${err}`);
        throw err;
      });
  }

  updateOneRegister(updateCharacterInfo, id) {
    return axios
      .put(`${this.BASE_URL}/characters/${id}`, updateCharacterInfo)
      .then(response => {
        console.log(response);
        this.getFullList();
      })
      .catch(err => {
        console.log(`Error while updating new character: ${err}`);
        throw err;
      });
  }

  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(response => {
        this.getFullList();
      })
      .catch(err => {
        console.log(`Error while deleting character: ${err}`);
        throw err;
      });

  }
}