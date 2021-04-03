class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters/');
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + '/characters/' + id);
  }

  createOneRegister(input) {
    return axios.post(this.BASE_URL + '/characters/', input);
  }

  updateOneRegister(id, input) {
    return axios.put(this.BASE_URL + '/characters/' + id, input);
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + '/characters/' + id);
  }
}
