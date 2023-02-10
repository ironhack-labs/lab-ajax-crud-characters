

class APIHandler {
  constructor () {
    this.api = axios.create({
      baseURL: 'http://localhost:8000'
    })
  }

  getFullList () {
    return this.api.get('http://localhost:8000/characters');
  }

  getOneRegister (characterId) {
      return this.api.get(`http://localhost:8000/characters/${characterId}`);
  }

  createOneRegister ( characterInfo ) {
    return this.api.post(`http://localhost:8000/characters`, characterInfo);
  }

  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`http://localhost:8000/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`http://localhost:8000/characters/${characterId}`);
  }
}

