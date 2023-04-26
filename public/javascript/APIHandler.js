class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const allCharacters = await axios.get(`${this.BASE_URL}/characters`);
    return allCharacters.data;
  }

  async getOneRegister(id) {
    const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
    return response.data;
  }

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}
