//const axios = require("axios").default;

class APIHandler {
  constructor(baseUrl) {
    this.service = axios.create({ baseURL: baseUrl });
    this.baseURL = baseUrl;
  }

  getFullList() {
    return this.service.get("/characters");
  } // R

  getOneRegister(id) {
    return this.service.get("/characters/" + id);
  } //R 1

  createOneRegister() {
    return this.service.post("/characters");
  } // C

  updateOneRegister(id) {
    return this.service.patch("/characters/" + id);
  } // U

  deleteOneRegister(id) {
    return this.service.delete("/characters/" + id);
  } // D
}

//axios.something to query the database at localhost/8000
