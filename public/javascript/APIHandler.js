class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const { data } = await axios.get(`${this.BASE_URL}/characters`);
      console.log('The array of characters: ', data);
      return data;
    } catch (err) {
      console.log(`Error while getting the list of characters: ${err}`);
    }
  }

  async getOneRegister(id) {
    try {
      const { data } = await axios.get(`${this.BASE_URL}/characters/${id}`);
      console.log('The character: ', data);
      return data;
    } catch (err) {
      console.log(`Error while getting the character: ${err}`);
    }
  }

  async createOneRegister(newCharacterInfo) {
    try {
      const { data } = axios.post(`${this.BASE_URL}/characters`, newCharacterInfo);
      console.log('The new character: ', data);
      return data;
    } catch (err) {
      console.log(`Error while saving a new character: ${err}`);
    }
  }

  async updateOneRegister(id, updatedCharacter) {
    try {
      const { data } = axios.put(`${this.BASE_URL}/characters/${id}`, updatedCharacter);
      console.log('The updated character: ', data);
      return data;
    } catch (err) {
      console.log(`Error while updating a character: ${err}`);
    }
  }

  async deleteOneRegister(id) {
    try {
      const { data } = axios.delete(`${this.BASE_URL}/characters/${id}`);
      return data;
    } catch (err) {
      console.log(`Err while deleting character: ${err}`);
    }
  }
}
