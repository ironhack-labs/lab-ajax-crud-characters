class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL)
      .then(({ data }) => data)
      .catch(err => {
        throw new Error(err);
      });
  }

  getOneRegister(id) {
    const endpoint = `${this.BASE_URL}/${id}`;
    return axios
      .get(endpoint)
      .then(({ data }) => data)
      .catch(err => {
        throw new Error(err);
      });
  }

  createOneRegister(data) {
    return axios
      .post(this.BASE_URL, data)
      .then(({ data }) => data)
      .catch(err => {
        throw new Error(err);
      });
  }

  updateOneRegister(data) {
    const endpoint = `${this.BASE_URL}/${data.id}`;
    return axios
      .patch(endpoint, data)
      .then(({ data }) => data)
      .catch(err => {
        throw new Error(err);
      });
  }

  deleteOneRegister(id) {
    const endpoint = `${this.BASE_URL}/${id}`;
    return axios
      .delete(endpoint)
      .then(({ data }) => data)
      .catch(err => {
        throw new Error(err);
      });
  }
}
