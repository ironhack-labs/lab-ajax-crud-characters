class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.query = axios.create({ baseURL: this.BASE_URL });
  }

  getFullList() {
    return this.query.get("/characters").then(response => response.data);
  }

  getOneRegister(id) {
    return this.query
      .get(`/characters/${id}`)
      .then(response => {
        console.log("GET ONE REGISTER RESPONSE", response.data);
      })
      .catch(err => console.log(`id ${id} not found!`));
  }

  createOneRegister(character) {
    this.query.post("/characters", character).then(response => {
      console.log("CREATE ONE REGISTER RESPONSE", response);
    });
  }

  updateOneRegister(id, newCharacterInfos) {
    this.query.patch(`/characters/${id}`, newCharacterInfos).then(response => {
      console.log("UPDATE ONE REGISTER RESPONSE", response.data);
    });
  }

  deleteOneRegister(id) {
    this.query
      .delete(`/characters/${id}`)
      .then(response => {
        console.log("DELETE ONE REGISTER RESPONSE", response.data);
      })
      .catch(err => console.log(`id ${id} not found!`));
  }
}
