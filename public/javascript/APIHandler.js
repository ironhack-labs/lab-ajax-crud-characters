class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      baseUrl: baseUrl,
    });
  }

  getFullList = () => {
    return this.api.get("/characters");
  };

  getOneRegister = (characterId) => {
    return this.api.get(`/characters/${characterId}`);
  };

  createOneRegister = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  };

  updateOneRegister = (characterId, characterInfo) => {
    return this.api.put(`/characters/${characterId}`);
  };

  deleteOneRegister = () => {
    return this.api.delete(`/characters/${characterId}`);
  };
}
