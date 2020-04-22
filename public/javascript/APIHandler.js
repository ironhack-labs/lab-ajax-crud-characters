const baseUrl = 'http://localhost:8000/characters';

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + `/${id}`)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  createOneRegister(character) {
    axios
      .post(this.BASE_URL, character)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }

  updateOneRegister(id,character) {
    axios
      .patch(this.BASE_URL + `/${id}`,character)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
  deleteOneRegister(id) {
    axios
      .get(this.BASE_URL + `/${id}`)
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}
