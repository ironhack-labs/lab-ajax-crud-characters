class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const response = await axios.get(`${this.BASE_URL}/characters`);
    return response.data;
  }

  async getOneRegister(id) {
  try {
    const response = await axios.get(`${this.BASE_URL}/characters/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

  async createOneRegister (characterData) {
    const response = await axios.post(`${this.BASE_URL}/characters`, characterData);
    return response.data;
  }

  async updateOneRegister (id, characterData) {
    const response = await axios.patch(`${this.BASE_URL}/characters/${id}`, characterData);
    return response.data;
  }

  async deleteOneRegister(id) {
    const response = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    return response;
  }
  
}
