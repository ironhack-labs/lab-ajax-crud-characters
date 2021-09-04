class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList = () => this.api.get('/characters');
  getOneRegister = (id) => this.api.get(`/characters/${id}`);
  createOneRegister = (register) => this.api.post('/characters', register);

  updateOneRegister = (id, updatedObj) =>
    this.api.put(`/characters/${id}`, updatedObj);

  deleteOneRegister() {}
}
