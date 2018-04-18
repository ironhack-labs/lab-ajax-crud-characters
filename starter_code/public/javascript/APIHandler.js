class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(`${this.BASE_URL}/characters`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  getOneRegister(id) {
    return axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  createOneRegister() {
    let newChar = {
      name: String,
      occupation: String,
      cartoon: Boolean,
      weapon: String
    };
    axios
      .post(`${this.BASE_URL}/characters`, newChar)
      .then(res => res.data)
      .catch(err => console.log(err));
  }

  updateOneRegister() {
    let updChar = {
      name: String,
      occupation: String,
      cartoon: Boolean,
      weapon: String
    };
    axios
      .patch(`${this.BASE_URL}/characters/${id}`, updChar)
      .then(response => {
        console.log("Update SUCCESS!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(() => console.log("Character successfully deleted"))
    .catch(err => console.log(err, "character not found"))
  }
}
