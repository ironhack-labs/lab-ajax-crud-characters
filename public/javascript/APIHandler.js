class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.BASE_URL });
  }

  async getFullList() {
    try {
      const fullList = await this.api.get(`/characters`);
      return fullList;
    } catch (err) {
      console.log(err);
    }
  }
  async getOneRegister(id) {
    try {
      const oneRegister = await this.api.get(`/characters/${id}`);
      return oneRegister;
    } catch (err) {
      console.log(err);
    }
  }

  async createOneRegister(obj) {
    try {
      const oneRegister = await this.api.post(`/characters`, obj);
      return oneRegister;
    } catch (err) {
      console.log(err);
    }
  }

  async updateOneRegister(id, obj) {
    try {
      const oneRegister = await this.api.put(`/characters/${id}`, obj);
      return oneRegister;
    } catch (err) {
      console.log(err);
    }
  }

  async deleteOneRegister(id) {
    try {
      const oneRegister = await this.api.delete(`/characters/${id}`);
      return oneRegister;
    } catch (err) {
      console.log(err);
    }
  }
}
