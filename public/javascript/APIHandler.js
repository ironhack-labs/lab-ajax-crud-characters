class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList(characters) {
    try {
      const response = await axios.get(`${this.BASE_URL}/${characters}`);
      console.log("All characters", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getOneRegister(id) {
    try {
      const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
      console.log("Character", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async createOneRegister(data) {
    try {
      const response = await axios.post(`${this.BASE_URL}/characters`, data);
      console.log("Created character", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async updateOneRegister(id, data) {
    try {
      const response = await axios.patch(`${this.BASE_URL}/characters/${id}`, data);
      console.log("Updated character", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOneRegister(id) {
    try {
      const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
      console.log("Deleted character", response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}