class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    let result;
    try {
      result = await axios.get(`${this.BASE_URL}/characters`);
      return result.data;
    } catch (err) {
      return err;
    }
  }

  async getOneRegister(characterId) {
    let character;
    try {
      character = await axios.get(`${this.BASE_URL}/characters/${characterId}`);
      return character;
    } catch (err) {
      return err;
    }
  }

  async createOneRegister(characterToCreate) {
    try {
      await axios.post(`${this.BASE_URL}/characters`, characterToCreate);
      return true;
    } catch (err) {
      return false;
    }
  }

  async updateOneRegister(updateId, characterToEdit) {
    try {
      await axios.patch(`${this.BASE_URL}/characters/${updateId}`, characterToEdit);
      return true;
    } catch (err) {
      return false;
    }
  }

  async deleteOneRegister(deleteId) {
    try {
      await axios.delete(`${this.BASE_URL}/characters/${deleteId}`);
      return true;
    } catch (err) {
      return false;
    }
  }
}
