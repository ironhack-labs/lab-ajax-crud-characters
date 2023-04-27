class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList(characters) {
    const fullList = await axios.get(`${this.BASE_URL}/${characters}`);
    return fullList.data;
  }

  async getOneRegister(id) {
    const oneStudent = await axios.get(`${this.BASE_URL}/${id}`);
    return oneStudent.data;
  }

  async createOneRegister(character) {
    const createNewCharacter = await axios.post(
      `${this.BASE_URL}/characters`,
      character
    );
    return createNewCharacter.data;
  }

  async updateOneRegister(id, editedChar) {
    const updateCharacter = await axios.put(
      `${this.BASE_URL}/characters/${id}`,
      editedChar
    );
    return updateCharacter.data;
  }

  async deleteOneRegister(id) {
    const deletedChar = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    return deletedChar.data;
  }
}
