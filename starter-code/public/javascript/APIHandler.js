export class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.handler = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    return this.handler.get();
  }

  getOneRegister(id) {
    return this.handler.get("/" + id);
  }

  createOneRegister(model) {
    return this.handler.post("/", model);
  }

  updateOneRegister(id, modification) {
    return this.handler.patch("/" + id, modification);
  }

  deleteOneRegister(id) {
    return this.handler.delete(id);
  }
}
