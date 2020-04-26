class APIHandler {
  constructor(baseUrl) {
    // this.BASE_URL = baseUrl;
    // "http://localhost:8000"
    this.service = axios.create({
      baseURL: baseUrl,
    });
  }
  getFullList() {
    return this.service.get("/characters");
  }
  getOneRegister(id) {
    return this.service.get(`/characters/${id}`)
  }
  createOneRegister(character) {
    return this.service.post(`/characters`, character);
  }
  updateOneRegister(character) {
    return this.service.patch(`/characters/`, character);
  }
  deleteOneRegister(id) {
    return this.service.delete(`/characters/${id}`);
  }
}