class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getFullList = () => this.api.get(`/characters`);

  getOneRegister = id => this.api.get(`/characters/${id}`);

  createOneRegister = characterInfo =>
    this.api.post(`/characters`, characterInfo);

  updateOneRegister = (id, characterInfo) =>
    this.api.put(`/characters/${id}`, characterInfo);

  deleteOneRegister = id => this.api.delete(`/characters/${id}`);
}
