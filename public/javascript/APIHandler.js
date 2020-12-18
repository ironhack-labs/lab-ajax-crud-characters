class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.charactersAPI = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  async getFullList() {
    try {
      // const characters  =  await axios.get(`${this.BASE_URL}/characters`);
      const { data: characters } = await this.charactersAPI.get(`/characters`);
      return characters;
    } catch (e) {
      console.error(e);
    }
  }

  async getOneRegister(id) {
    try {
    const { data: character } = await this.charactersAPI.get(`/characters/${id}`);
    return character;
  } catch (e) {
    console.error(e);
  }
  }

  createOneRegister() {}

  updateOneRegister() {}

  async deleteOneRegister(id) {
    try {
      await this.charactersAPI.delete(`/characters/${id}`);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }
}
