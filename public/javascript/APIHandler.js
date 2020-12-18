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

  getOneRegister() {}

  createOneRegister() {}

  updateOneRegister() {}

  deleteOneRegister() {}
}
