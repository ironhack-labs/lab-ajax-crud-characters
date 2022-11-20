
class APIHandler {
  constructor () {
   this.api = axios.create({
    baseURL: 'http://localhost:8000'
    });
  }
  getFullList () {
    return this.api.get('/characters')
  }

  getOneRegister (characterId) {
    return this.api.get(`/characters/${characterId}`)
  }

  createOneRegister (charInf) {
    console.log(charInf)
    return this.api.post(`/characters`, charInf ); 
  }

  updateOneRegister (characterId, charInf) {
    return this.api.put(`/characters/${characterId}`, charInf);
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`);
  }
}