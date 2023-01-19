class APIHandler {
	constructor(baseUrl) {
		this.BASE_URL = baseUrl;
	}

  getAllCharacters = () => {
    return this.api.get('/characters');
  }

  getOneCharacter = (characterId) => {
return this.api.get(`/characters/${characterId}`);
  }

  createCharacter = (characterInfo) => {
    return this.api.post(`/character`, characterInfo);
  }

  editCharacter = (characterId, characterInfo) => {
    return this.api.post(`/characters/${characterId}`, characterInfo);
  }

  deleteCharacter = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  }

}


