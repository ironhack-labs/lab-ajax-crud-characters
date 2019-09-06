class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister(name, occupation, cartoon, weapon) {
    return axios.post(`${this.BASE_URL}/characters`, {
      name,
      occupation,
      cartoon,
      weapon,
    });
  }

  updateOneRegister(id, name, occupation, cartoon, weapon) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, {
      name,
      occupation,
      cartoon,
      weapon,
    });
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
