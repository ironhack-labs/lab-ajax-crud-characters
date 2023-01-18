class APIHandler {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL,
    });
  }

  getAllCharacters = () => {
    return this.api.get("/characters");
  };

  getOneCharacter = (characterID) => {
    return this.api.get(`/characters/${characterID}`);
  };
  createCharacter = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  };
  editCharacter = (characterID, characterInfo) => {
    return this.api.put(`/characters/${characterID}`, characterInfo);
  };
  deleteCharacter = (characterID) => {
    return this.api.delete(`/characters/${characterID}`);
  };
}

