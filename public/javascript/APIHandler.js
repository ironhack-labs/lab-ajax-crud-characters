class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + `/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  async createOneRegister(character) {
    await axios
      .post(this.BASE_URL, character)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  updateOneRegister(id, character) {
    axios
      .patch(this.BASE_URL + `/${id}`, character)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }
  deleteOneRegister(id) {
    axios
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
