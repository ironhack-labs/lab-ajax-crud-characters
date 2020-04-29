//https://stackoverflow.com/questions/48980380/returning-data-from-axios-api

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters')
      .then(response => {
        return response.data;
      });
  }

  getOneRegister(characterId) {
    return axios.get(this.BASE_URL + `/characters/${characterId}`)
      .then(response => {
        return response.data;
      });
  }

  createOneRegister(character) {
    return axios.post(this.BASE_URL + '/characters', character)
      .then(response => {
        return response.data;
      });
  }

  updateOneRegister(characterId, updatedCharacter) {
    return axios.patch(this.BASE_URL + `/characters/${characterId}`, updatedCharacter)
      .then(response => {
        return response.data;
      });
  }


  deleteOneRegister(characterId) {
    return axios.delete(this.BASE_URL + `/characters/${characterId}`)
      .then(response => {
        return response;
      });
  }
}