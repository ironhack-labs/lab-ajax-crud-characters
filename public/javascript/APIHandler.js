class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneRegister() {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async createOneRegister(data) {
    try {
      const response = await axios.post(`${this.BASE_URL}/characters`,data);
      console.log(response);
      return response
    } catch (error) {
      console.log(error);
    }
  }

  async updateOneRegister(id,data) {
    try {
      const response = await axios.put(`${this.BASE_URL}/characters/${id}`,data);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error editing character by ID:", error);
      throw error;
    }
  }

  async deleteOneRegister(id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error deleting character by ID:", error);
      throw error;
    }
  }
}
