class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList() {
    return axios.get(`http://localhost:8000/characters/`);
  }

  getOneRegister(id) {
    return axios.get(`http://localhost:8000/characters/${id}`);
  }

  createOneRegister(newCharacter) {
    return axios.post(`http://localhost:8000/characters/`, newCharacter);
  }

  updateOneRegister(id) {
    return axios.patch(`http://localhost:8000/characters/${id}`);
  }

  deleteOneRegister(id) {
    const params = this.params;
    return axios.delete(`http://localhost:8000/characters/${id}`);
  }
}
