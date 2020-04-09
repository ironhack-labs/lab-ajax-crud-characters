class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getOneRegister(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createOneRegister(body) {
    try {
      await axios.post(`${this.BASE_URL}/characters`, body);
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateOneRegister(id, body) {
    try {
      await axios.put(`${this.BASE_URL}/characters/${id}`, body);
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteOneRegister(id) {
    try {
      await axios.delete(`${this.BASE_URL}/characters/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}
