class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const characterFull = await axios.get(`${this.BASE_URL}/characters`);
    return characterFull.data;
  }

  async getOneRegister (id) {
    const character = await axios.get(`${this.BASE_URL}/characters/${id}`);
    return character.data;
  }

  async createOneRegister (character) {
    const newCharacter = await axios.post(`${this.BASE_URL}/characters`, character);
    return newCharacter;
  }

  async updateOneRegister (id,character) {
    const editCharacter = await axios.put(`${this.BASE_URL}/characters/${id}`, character);
    return editCharacter;
  }

  async deleteOneRegister (id) {
    await axios.delete(`${this.BASE_URL}/characters/${id}`);
  }
}
