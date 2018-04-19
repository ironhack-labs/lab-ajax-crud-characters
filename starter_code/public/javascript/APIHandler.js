class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(res => res.data)
      .catch(err => err);
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(res => res.data)
      .catch(err => err);
  }

  createOneRegister(newChar) {
    axios.post(`${this.BASE_URL}/characters`, newChar);
  }

  updateOneRegister(id, newData) {
    axios.patch(`${this.BASE_URL}/characters/${id}`, newData);
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
