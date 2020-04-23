class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  getOneRegister(id) {
    return axios
      .get(this.BASE_URL + `/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { cartoon: 'Empty ID', name: 'Empty ID', occupation: 'Empty ID', weapon: 'Empty ID', err};
      });
  }

  async createOneRegister(character) {
    return await axios
      .post(this.BASE_URL, character)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  updateOneRegister(id, character) {
    return axios
      .patch(this.BASE_URL + `/${id}`, character)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  deleteOneRegister(id) {
    return axios
      .delete(this.BASE_URL + `/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}
