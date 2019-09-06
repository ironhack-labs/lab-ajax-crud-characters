class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

  }

  async getFullList () {
    const characters = await axios.get(`${this.BASE_URL}/characters`);
    return characters.data;
  }

  async getOneRegister (id) {
    try{
      const register = await axios.get(`${this.BASE_URL}/characters/${id}`);
      document.getElementById('fetch-one').classList.add('active');
      return register.data;
    }
    catch(e) {
      document.getElementById('fetch-one').classList.add('disable')
    }
  }

  async createOneRegister (body) {
    const create = await axios.post(`${this.BASE_URL}/characters/`, body);
    return create.data;
  }

  async deleteOneRegister (id) {
    try{
    const deleteC = await axios.delete(`${this.BASE_URL}/characters/${id}`);
    document.getElementById('delete-one').classList.add('active');
    return deleteC.data;
    }
    catch(e) {
      document.getElementById('delete-one').classList.add('disable')
    }
  }

  async updateOneRegister (id, body) {
    try{
      await axios.patch(`${this.BASE_URL}/characters/${id}`, body);
    }
    catch(e) {
      document.getElementById('delete-one').classList.add('disable')
    }
  }
}
