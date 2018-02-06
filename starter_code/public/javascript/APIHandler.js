class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  _returnData(result) {
    console.log(result.data);
    return result.data;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(this._returnData)
      .catch(err => {
        console.error(err);
      });
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(this._returnData)
      .catch(err => {
        console.error(err);
      });
  }

  createOneRegister(newCharacter) {
    return axios
      .post(`${this.BASE_URL}/characters`, newCharacter)
      .then(this._returnData)
      .catch(err => {
        console.error(err);
      });
  }

  updateOneRegister(id, editedCharacter) {
    return axios
      .patch(`${this.BASE_URL}/characters/${id}`, editedCharacter)
      .then(this._returnData)
      .catch(err => {
        console.error(err);
      });
  }

  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(this._returnData)
      .catch(err => {
        console.error(err);
      });
  }
}
