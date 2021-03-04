class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + "/characters");
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + "/characters/" + id);
  }

  createOneRegister (createdCharacter) {
    return axios.post(this.BASE_URL + "/characters", createdCharacter);
  }

  updateOneRegister (id, updatedCharacter) {
    return axios.patch(this.BASE_URL + "/characters/" + id, { updatedCharacter });
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + "/characters/" + id);
  }
}
