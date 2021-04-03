class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters`);

      return response.data;
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  async getOneRegister(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);

      return response.data
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  async createOneRegister(newCharacter) {
    try {
      const response = await axios.post(`${this.BASE_URL}/characters`, newCharacter);

      return response.data;
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  async updateOneRegister(id) {
    try {
      const response = await axios.put(`${this.BASE_URL}/characters/${id}`);

      return response.data;
    } catch (error) {
      console.log(error);

      return [];
    }
  }

  async deleteOneRegister(id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);

      return response.status;
    } catch (error) {

    }
  }
}
