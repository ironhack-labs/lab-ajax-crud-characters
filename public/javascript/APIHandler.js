class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList (characters) {
    const fullList = await axios.get(`${this.BASE_URL}/${characters}`);
    return fullList.data;
  }

  async getOneRegister (characters, id) {
    const oneRegister = await axios.get(`${this.BASE_URL}/${characters}/${id}`);
    return oneRegister.data;
  }

  async createOneRegister (characters, newCharacter) {
    const createOneRegister = await axios.post(`${this.BASE_URL}/${characters}`, newCharacter);
    return 
  }

  async updateOneRegister (characters, id) {
    const updateOneRegister = await axios.get(`${this.BASE_URL}/${characters}/${id}`);
    return updateOneRegister.data;    
  }

  async deleteOneRegister (characters, id) {
    const deleteOneRegister = await axios.get(`${this.BASE_URL}/${characters}/${id}`);
    return deleteOneRegister.data; 
  }
}
