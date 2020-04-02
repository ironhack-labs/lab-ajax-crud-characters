class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios
      .get(this.BASE_URL + '/characters')
      .then(charactersFromAPI => charactersFromAPI.data)
      .catch(error => console.log(error));
  }

  getOneRegister (id) {
    return axios
      .get(this.BASE_URL + '/characters/' + id)
      .then(characterFromAPI => characterFromAPI.data)
      .catch(error => console.log(error));
  }

  createOneRegister (name, occupation, weapon, cartoon) {
    const newCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    };
    
    return axios
      .post(this.BASE_URL + '/characters', newCharacter)
      .then(characterFromAPI => characterFromAPI.data)
      .catch(error => console.log(error));
  }

  updateOneRegister (id, name, occupation, weapon, cartoon) {
    const updatedCharacter = {
      name,
      occupation,
      weapon,
      cartoon
    };
    
    return axios
      .put(this.BASE_URL + '/characters/' + id, updatedCharacter)
      .then(characterFromAPI => characterFromAPI.data)
      .catch(error => console.log(error));
  }

  deleteOneRegister (id) {
    return axios
      .delete(this.BASE_URL + '/characters/' + id)
      .then(characterFromAPI => characterFromAPI.data)
      .catch(error => console.log(error));
  }
}
