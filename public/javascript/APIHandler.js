class APIHandler {
  constructor(baseURL) {
    this.api = axios.create({ baseURL });
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

  deleteOneRegister = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  };

  updateOneRegister = (characterId, characterInfo) => {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  };
}

module.exports = APIHandler;
