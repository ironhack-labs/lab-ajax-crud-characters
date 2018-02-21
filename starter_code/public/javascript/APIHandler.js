class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(this.BASE_URL + "/characters")
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(this.BASE_URL + "/characters/" + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  createOneRegister(characterInfo) {
    axios
      .post(this.BASE_URL + "/characters/", characterInfo)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateOneRegister(id, characterInfo) {
    axios
      .patch(this.BASE_URL + "/characters/" + id, characterInfo)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(this.BASE_URL + "/characters/" + id)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.error(err);
      });
  }
}
