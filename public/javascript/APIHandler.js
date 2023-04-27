class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList(characters) {
    const allCharacters = await axios(`${this.BASE_URL}/${characters}`);
    return allCharacters.data;
  }

  async getOneRegister(characters, id) {
    const oneCharacter = await axios(`${this.BASE_URL}/${characters}/${id}`);
    return oneCharacter.data;
  }

  async createOneRegister(characters, newCharacter) {
    const createCharacter = await axios.post(
      `${this.BASE_URL}/${characters}`,
      newCharacter
    );
    return createCharacter;
  }

  async deleteOneRegister(characters, id) {
    const deletedCharacter = await axios.delete(
      `${this.BASE_URL}/${characters}/${id}`
    );
    return deletedCharacter;
  }

  async updateOneRegister(characters, id, characterUpdated) {
    const updateCharacter = await axios.put(`${this.BASE_URL}/${characters}/${id}`,characterUpdated);
    return updateCharacter;
  }

}

