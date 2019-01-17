class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get("http://localhost:8000/characters");
  }

  getOneRegister(id) {
    return axios.get(`http://localhost:8000/characters/${id}`);
  }

  createOneRegister(name, occupation, weapon, cartoon) {
    return axios.post("http://localhost:8000/characters", {
      name,
      occupation,
      weapon,
      cartoon
    });
  }

  updateOneRegister(id, object) {
    return axios.put(`http://localhost:8000/characters/${id}`);
  }

  deleteOneRegister(id) {
    return axios.delete(`http://localhost:8000/characters/${id}`);
  }
}
