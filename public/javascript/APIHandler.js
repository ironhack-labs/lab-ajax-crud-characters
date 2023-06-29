class APIHandler {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  getFullList() {
    return axios
      .get(`${this.baseUrl}/characters`)
      .then((response) => {
        const characters = response.data;
        console.log(characters);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getOneRegister(id) {
    return axios
      .get(`${this.baseUrl}/characters/${id}`)
      .then((response) => {
        const character = response.data;
        console.log(character);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  createOneRegister(characterData) {
    return axios
      .post(`${this.baseUrl}/characters`, characterData)
      .then((response) => {
        const newCharacter = response.data;
        console.log(newCharacter);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateOneRegister(characterId, updatedCharacter) {
    // updateOneRegister(id, characterData) {
    // return axios
    //   .put(`${this.baseUrl}/characters/${id}`, characterData)
    //   .then((response) => {
    //     const updatedCharacter = response.data;
    //     console.log(updatedCharacter);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const url = `${this.baseUrl}/characters/${characterId}`;

    return axios.put(url, updatedCharacter);
  }

  deleteOneRegister(characterId) {
    const url = `${this.baseUrl}/characters/${characterId}`;

    return axios.delete(url);
  }
  createOneRegister(newCharacter) {
    const url = `${this.baseUrl}/characters`;

    return axios.post(url, newCharacter);
  }
}
