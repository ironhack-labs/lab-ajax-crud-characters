class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}characters`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  getOneRegister(characterID) {
    const id = characterID;
    axios
      .get(`${this.BASE_URL}characters/${id}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  createOneRegister(newC) {
    // const data = {
    //   name: name,
    //   occupation: occupation,
    //   debt: debt,
    //   weapon: weapon
    // };
    axios
      .post(`${this.BASE_URL}characters`, newC)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  updateOneRegister(changedInfo) {
    axios
      .patch(`${this.BASE_URL}characters/${changedInfo.id}`, changedInfo)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

  deleteOneRegister(characterID) {
    const id = characterID;
    axios
      .delete(`${this.BASE_URL}characters/${id}`, changedInfo)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
