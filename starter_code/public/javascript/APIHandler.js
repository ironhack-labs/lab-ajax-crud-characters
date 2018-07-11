class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    const url = this.BASE_URL + "characters";

    return axios.get(url).then(res => res);
  }

  getOneRegister(id) {
    const url = this.BASE_URL + `characters/${id}`;

    return axios.get(url).then(res => res);
  }

  createOneRegister(data) {
    const url = this.BASE_URL + `characters/`;

    return axios.post(url, data).then(res => res);
  }

  updateOneRegister(id, data) {
    const url = this.BASE_URL + `characters/${id}`;

    return axios.patch(url, data).then(res => res);
  }

  deleteOneRegister(id) {
    const url = this.BASE_URL + `characters/${id}`;

    return axios.delete(url).then(res => res);
  }
}
