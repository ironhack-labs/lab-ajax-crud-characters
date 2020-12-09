class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    try {
      return axios.get(`${this.BASE_URL}/characters`);
    } catch (err) {
      console.error(err);
    }
  }

  getOneRegister(id) {
    try {
      return axios.get(`${this.BASE_URL}/characters/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  createOneRegister(objet) {
    try {
      return axios.post(`${this.BASE_URL}/characters/`, { objet });
    } catch (err) {
      console.error(err);
    }
  }

  updateOneRegister(id) {
    try {
      return axios.patch(`${this.BASE_URL}/characters/${id}`);
    } catch (err) {
      console.error(err);
    }
  }

  deleteOneRegister(id) {
    try {
      axios.delete(`${this.BASE_URL}/characters/${id}`);
      // if (this.deleteOneRegister(id)) {
      //   console.log("Character has been successfully deleted");
      // } else {
      //   console.log("Character not found");
      // }
    } catch (err) {
      console.error(err);
    }
  }
}
