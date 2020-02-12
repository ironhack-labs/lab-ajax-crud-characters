class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters/`);
  }

  getOneRegister(id) {
    console.log(id)
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister(character) {
    axios.post(`${this.BASE_URL}/characters`, character)
      .then(r => console.log("Create Complete"))
      .catch(e => console.log(e));
  }

  updateOneRegister(id, character) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, character)
      .then(r => console.log("Update Complete"))
      .catch(e => console.log("Character not found"));
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then(r => {
        console.log("Character has been successfully deleted")
      })
      .catch(e => {
        console.log("Character not found")
      });
  }
}
