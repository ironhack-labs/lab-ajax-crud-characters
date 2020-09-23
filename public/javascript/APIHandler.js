class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.service = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList() {
    console.log('getfull list');
    return this.service.get("/");
  }

  getOneRegister(id) {
    console.log('get one');
    return this.service.get("/" + id);
  }

  createOneRegister(data) {
    return this.service.post("/", data);
  }

  updateOneRegister(id, data) {
    return this.service.patch(id, data);
  }

  deleteOneRegister(id) {
    return this.service.delete("/" + id);
  }
}