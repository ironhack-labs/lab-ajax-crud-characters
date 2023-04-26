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

  async createOneRegister(data) {
    await axios.post(`${this.BASE_URL}/characters`, data);
  }

  async updateOneRegister(id, data) {
    await axios.patch(`${this.BASE_URL}/characters/${id}`, data);
  }

  async deleteOneRegister(id) {
    await axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
