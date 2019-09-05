class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

  }

  async getFullList () {
    const characters = await axios.get(`${this.BASE_URL}/characters`);
    return characters.data;
  }

  async getOneRegister (id) {
    const register = await axios.get(`${this.BASE_URL}/characters/${id}`);
    return register.data;
  }

  async createOneRegister (body) {
    const create = await axios.post(`${this.BASE_URL}/characters/`, body);
    return create.data;
  }

  deleteOneRegister (id) {
    // const deleteC = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    // return deleteC.data;
  }

  updateOneRegister () {

  }


}
