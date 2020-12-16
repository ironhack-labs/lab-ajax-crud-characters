class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.appi = axios.create({baseURL: this.BASE_URL});
  }

  getFullList () {
    return this.appi.get("/characters");  
  }

  getOneRegister (id) {
    return this.appi.get(`/characters/${id}`);
  }

  createOneRegister (newCharacter) {
    return this.appi.post("/characters", newCharacter);
  }

  updateOneRegister (updateChar, id) {
    return this.appi.put(`/characters/${id}`, updateChar);
  }

  deleteOneRegister (id) {
    return this.appi.delete(`/characters/${id}`);
  }
}
