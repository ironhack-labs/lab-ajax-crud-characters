class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({
      baseURL: baseUrl
    });
  }

  getAllCharacters = () => {
    return this.api.get('/characters');
  };

  getOneCharacter = (id) => {
    return this.api.get(`/characters/${id}`);
  }

  createCharacter = (characterInfo) => {
    
    return this.api.post(`/characters`, characterInfo);
  }

  deleteCharacter = (id) => {
    return this.api.delete(`/characters/${id}`);
  }
  
  editCharacter = (id, characterInfo) => {
    return this.api.put(`/characters/${id}`, characterInfo);
  }
}

//module.exports = APIHandler;