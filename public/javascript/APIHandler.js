class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }

  createOneRegister(data) {
    return axios
      .post(`${this.BASE_URL}/characters/`, data)
      .then((response) => response.data)
      .catch((err) => console.log(err));
  }

  updateOneRegister(id, data) {
    return axios
      .put(`${this.BASE_URL}/characters/${id}`, data)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }
}
