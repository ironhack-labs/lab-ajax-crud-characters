class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters').then(res => res.data);
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + '/characters/' + id).then(res => res.data);
  }

  createOneRegister(charInfo) {
    return axios
      .post(this.BASE_URL + '/characters', charInfo)
      .then(res => res.data);
  }

  updateOneRegister(id, charInfo) {
    return axios
      .put(this.BASE_URL + '/characters/' + id, charInfo)
      .then(res => res.data);
  }

  deleteOneRegister(id) {
    return axios
      .delete(this.BASE_URL + '/characters/' + id)
      .then(res => res.data);
  }
}
