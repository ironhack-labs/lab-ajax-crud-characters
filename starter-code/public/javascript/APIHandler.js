console.log("hey");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList() {
    return this.api.get("/characters");
  }

  getOneRegister(theId) {
    return this.api.get("/characters/" + theId);
  }

  createOneRegister(newChar) {
    return this.api.post("/characters", newChar);
  }

  updateOneRegister(TheId, updateChar) {
    return this.api.patch("/characters/" + TheId, updateChar);
  }

  deleteOneRegister(theId) {
    return this.api.delete("/characters/" + theId);
  }
}

export default APIHandler;
