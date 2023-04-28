class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList(characters) {
    const allCharacters = await axios(`${this.BASE_URL}/${characters}`);
    return allCharacters.data;
  }

  async getOneRegister(characters, id) {
    const oneRegister = await axios.get(`${this.BASE_URL}/${characters}/${id}`);
    return oneRegister.data;
  }

  async createOneRegister(characters) {
    const createOneRegister = await axios.post(`${this.BASE_URL}/${characters}`);
    return createOneRegister.data;
  }

  async updateOneRegister(characters, id) {
    const updateOneRegister = await axios.put(`${this.BASE_URL}/${characters}/${id}`);
    return updateOneRegister.data;
  }

  async deleteOneRegister(characters, id) {
    const deleteOneRegister = await axios.delete(`${this.BASE_URL}/${characters}/${id}`);
    return deleteOneRegister.data;
  }
}
