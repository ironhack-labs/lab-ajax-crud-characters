class APIHandler {
  constructor(baseUrl) {
    this.api = axios.create({
      BASE_URL: baseUrl,
    });
  }

  getAllCharacters = () => {
    return this.api.get("http://localhost:8000/characters");
  };

  getOneCharacter = (characterId) => {
    return this.api.get(`http://localhost:8000/characters/${characterId}`);
  };

  createCharacter = (characterInfo) => {
    return this.api.post(`http://localhost:8000/characters`, characterInfo);
  };

  editCharacter = (characterId, characterInfo) => {
    return this.api.put(
      `http://localhost:8000/characters/${characterId}`,
      characterInfo
    );
  };

  deleteCharacter = (characterId) => {
    return this.api.delete(`http://localhost:8000/characters/${characterId}`);
  };
}