class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  getOneRegister() {
    axios
      .get(`${this.BASE_URL}/characters/:${id}`)
      .then(res => console.log(res.data))
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
      .then(res => console.log(res.data))
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
      .patch(`${this.BASE_URL}/characters/${id}`, updateInfo)
      .then(response => {
        console.log("Update SUCCESS!");
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteOneRegister() {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(() => console.log("Character successfully deleted"))
    .catch(err => console.log(err, "character not found"))
  }
}
