class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = "http://localhost:8000";
    this.api = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getFullList () {
    return this.api.get('/characters');

  }

  getOneRegister (id) {
    return this.api.get(`/characters/${id}`);

  }

  createOneRegister () {
    return this.api.post(`/characters`, characterInfo);

  }

  updateOneRegister () {
    return this.api.put(`/characters/${id}`, characterInfo);

  }

  deleteOneRegister () {
    return this.api.delete(`/characters/${id}`);

  }
}
