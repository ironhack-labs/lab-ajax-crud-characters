class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl
    });
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return this.api.get("/characters");
  }

  getOneRegister (charID) {
    return this.api.get(`/characters/${charID}`)
  }

  createOneRegister (charInfo) {
    return this.api.post("/characters", charInfo);
  }

  updateOneRegister (charID, charInfo) {
    return this.api.put(`/characters/${charID}`, charInfo);
  }

  deleteOneRegister (charID) {
    return this.api.delete(`characters/${charID}`);
  }
}
