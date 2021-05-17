class APIHandler {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
  }

  // http://localhost:8000/characters
  getFullList = () => {
    return this.api.get("/characters");
  }
  
    // http://localhost:8000/characters/4
  getOneRegister = (id) => this.api.get("/characters/" + id);

  createOneRegister = (newCharac) => this.api.post("/characters/", newCharac);

  updateOneRegister = (updatedCharacter, id) => this.api.patch("/characters/"+ id, updatedCharacter);

  deleteOneRegister = (id) => this.api.delete("/characters/" + id);
}
