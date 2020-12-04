class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + '/characters')
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    return axios
      .get(this.BASE_URL + '/characters/' + id)
      .then(response => response.data)
      .catch(err => console.log(err));
  }

  createOneRegister(newChar) {
    return axios
      .post(this.BASE_URL + '/characters', newChar)
      .then()
      .catch(err => console.log(err));
  }

  updateOneRegister(id, modifChar) {
    return axios
      .patch(this.BASE_URL + '/characters/' + id, modifChar)
      .then()
      .catch(err => console.log(err));
  }

  deleteOneRegister(id) {
    return axios
      .delete(this.BASE_URL + '/characters/' + id)
      .then()
      .catch(err => console.log(err));
  }
}
