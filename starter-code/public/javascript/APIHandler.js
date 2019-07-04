class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList() {
    return axios
      .get(this.BASE_URL + "/characters")
      .then(allCharactersPayload => {
        return allCharactersPayload.data;
      });
  }

  getOneRegister(id) { //searchId
    return axios
      .get(this.BASE_URL + "/characters/" + id)
      .then(character => {
        return character.data;
      });
  }
  createOneRegister() {
    return axios
      .post(this.BASE_URL + "/characters/")
      // .create(req.body)
      .then(characters => {
        return characters.data;
      });
  }


  updateOneRegister(id, characterUpdated) {
    return axios
      .put((this.BASE_URL + "/characters/" + id), characterUpdated)
      .then(characterUpdated => {
        return characterUpdated.data;
      })
  }

  deleteOneRegister(id) {
    return axios
      .delete(this.BASE_URL + "/characters/" + id)
      .then(characters => {
        return characters.data;
      })
  }
}