class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl
    });
  }

  getFullList() {
    console.log("Hello");
    return this.api.get("/characters"); //http:localhost:8000/characters
  }

  getOneRegister(id) {
    console.log("Hola");
    return this.api.get(`/characters/${id}`);
  }

  createOneRegister(data) {
    return this.api.post(`/characters`, data);
  }

  updateOneRegister(data, id) {
    return this.api.patch(`/characters/${id}`, {
      name: data.name,
      occupation: data.occupation,
      weapon: data.weapon,
      cartoon: data.cartoon
    });
  }

  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`);
  }
}
