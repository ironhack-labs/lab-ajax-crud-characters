
class ApiService {
  constructor () {
    this.api = axios.create({baseURL : "http://localhost:8000"})
    
  }
 
  getAllCharacters = () => {
    return this.api.get('/characters')
    .then(response => response)
  };
 
  getOneCharacter = (characterId) => {
    return this.api.get(`/characters/${characterId}`);
  }
 
  createCharacter = (characterInfo) => {
    return this.api.post(`/characters`, characterInfo);
  }
 
  editCharacter = (characterId, characterInfo) => {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }
 
  deleteCharacter = (characterId) => {
    return this.api.delete(`/characters/${characterId}`);
  }
  
}
 
