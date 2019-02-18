class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios.get(`${this.BASE_URL}/characters`).then(Res => {
      console.log(Res);
      document.querySelector('body').append(JSON.stringify(Res.data));
    });
  }

  getOneRegister(characterID) {
    axios.get(`${this.BASE_URL}/characters/${characterID}`).then(Res => {
      console.log(Res);
    });
    // http://localhost:8000/characters/:id
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    axios
      .post(`${this.BASE_URL}/characters`, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      })
      .then(Res => {
        console.log(Res);
      });
    // axios.put(url[, data[, config]])
    // http://localhost:8000/characters
  }

  updateOneRegister(theId, name, occupation, weapon, cartoon) {
    axios
      .patch(`${this.BASE_URL}/characters/${theId}`, {
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      })
      .then(response => {
        console.log('update successful: ', response);
      })
      .catch(error => {
        console.log(error);
      });
    // http://localhost:8000/characters/:id
  }

  deleteOneRegister(characterID) {
    axios.delete(`${this.BASE_URL}/characters/${characterID}`).then(Res => {
      console.log(Res);
    });
    // http://localhost:8000/characters/:id
  }
}
