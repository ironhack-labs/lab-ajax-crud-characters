const baseURL = 'http://localhost:8000';

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: this.BASE_URL });
  }

  async getFullList() {
    try {
      return this.api.get('/characters');
    } catch (err) {
      console.log(console.log(err));
    }
  }

  getOneRegister(id) {
    try {
      return this.api.get(`/characters/${id}`);
    } catch (err) {
      console.log(console.log(err));
    }
  }

  createOneRegister(data) {
    try {
      return this.api.post('/characters', data);
    } catch (err) {
      console.log(console.log(err));
    }
  }

  updateOneRegister(id, data) {
    try {
      this.api.put(`/characters/${id}`, data);
    } catch (err) {
      console.log(console.log(err));
    }
  }

  deleteOneRegister(id) {
    try {
      return this.api.delete(`/characters/${id}`);
    } catch (err) {
      console.log(console.log(err));
    }
  }
}
