class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then(character => {
        console.log(character.data);
      })
      .then(err => {
        console.log(err);
      });
  }

  getOneRegister(id) {
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then(character => {
        console.log(character.data);
      })
      .then(err => {
        console.log(err);
      });
  }

  createOneRegister(name, occupation, weapon, isCartoon) {
    axios
      .post(`${this.BASE_URL}/characters/`, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: isCartoon
      })
      .then(character => {
        console.log(character.data);
      })
      .then(err => {
        console.log(err);
      });
  }

  updateOneRegister(id, name, occupation, weapon, isCartoon) {
    axios
      .patch(`${this.BASE_URL}/characters/${id}`, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: isCartoon
      })
      .then(character => {
        console.log(character.data);
      })
      .then(err => {
        console.log(err);
      });
  }

  deleteOneRegister(id) {
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(character => {
        console.log(character.data);
      })
      .then(err => {
        console.log(err);
      });
  }
}
