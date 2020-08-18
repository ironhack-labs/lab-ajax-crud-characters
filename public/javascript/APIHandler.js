class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return axios
        .get(`${this.BASE_URL}/characters`)
        .catch(err => console.log(err));
  }

  getOneRegister (charactersID) {
      return axios
        .get(`${this.BASE_URL}/characters/${charactersID}`)
  }     .catch(err => console.log(err));

  createOneRegister (newCharacter) {
      return axios.post(`${this.BASE_URL}/characters`, newCharacter)
  }

  updateOneRegister (charactersID, updatedCharacter) {
     return axios.put(`${this.BASE_URL}/characters/${charactersID}`, updatedCharacter)
  }

  deleteOneRegister (charactersID) {
     return axios.delete(`${this.BASE_URL}/characters/${charactersID}`)
  }
}
