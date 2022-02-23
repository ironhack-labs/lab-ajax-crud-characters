class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try{
      return await axios.get(`${this.BASE_URL}/characters`);
    } catch (error) {
      return error;
    }
  }

  async getOneRegister (id) {
    try {
      return await axios.get(`${this.BASE_URL}/characters/${id}`);
    } catch (error) {
      return error;
    }
  }

  async createOneRegister (register) {
    try {
      return await axios.post(`${this.BASE_URL}/characters`, register);
    } catch (error) {
      return error;
    }
  }

  async updateOneRegister (id, register) {
    try {
      return await axios.put(`${this.BASE_URL}/characters/${id}`, register);
    } catch (error) {
      return error;
    }
  }

  async deleteOneRegister (id) {
    try {
      return await axios.delete(`${this.BASE_URL}/characters/${id}`);
    } catch (error) {
      return error;
    }
  }
}
