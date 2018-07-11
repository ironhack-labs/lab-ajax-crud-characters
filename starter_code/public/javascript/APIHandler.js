class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL)
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/${id}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  createOneRegister(char) {
    console.log(char)
    return axios
      .post(this.BASE_URL, char)
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  updateOneRegister(id, char) {
    return axios
      .patch(`${this.BASE_URL}/${id}`, char)
      .then(res => res.data)
      .catch(error => console.log(error));
  }

  deleteOneRegister(id) {
    return axios
      .delete(`${this.BASE_URL}/${id}`)
      .then(res => res.data)
      .catch(error => console.log(error));
  }
}
