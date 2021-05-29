class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try {
        const response = await axios.get(`${this.BASE_URL}/characters`);
        console.log(response.data)
        return response.data;
    } catch (e) {
        console.log(e);
    }

  }

  async getOneRegister (id) {
    try {
        const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
        console.log(response.data)
        return response.data;
    } catch (e) {
        console.log(e);
    }

  }

  async createOneRegister (characterObject) {
    try {
        const response = await axios.post(`${this.BASE_URL}/characters`, characterObject);
        return response.data;
    } catch (e) {
        console.log(e);
    }
  }

  async updateOneRegister (id, characterObject) {
    try {
      console.log(`${this.BASE_URL}/characters/${id}`, characterObject)
      const response = await axios.put(`${this.BASE_URL}/characters/${id}`, characterObject);
      console.log('response', response.data)
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }

  async deleteOneRegister (id) {
    try {
        const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
        return response.status;
    } catch (e) {
        console.log(e);
        return e
    }
  }
}
