class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const { data } = await axios.get(`${this.BASE_URL}/characters`);
    return data;
  }

  async getOneRegister(id) {
    const { data } = await axios.get(`${this.BASE_URL}/characters/${id}`);
    return [data];
  }

  async createOneRegister(character) {
    const { data } = await axios.post(`${this.BASE_URL}/characters`, character);
    return [data];
  }

  async updateOneRegister(id, character) {
    const { data } = await axios.put(`${this.BASE_URL}/characters/${id}`, character);
    return [data];
  }

  async deleteOneRegister(id) {
    return await axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
