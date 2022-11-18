
// const api = axios.create({
//   baseURL: 'http://localhost:8000'
// });


class APIHandler {
  constructor () {
   this.api = axios.create({
    baseURL: 'http://localhost:8000'
  });
  }

  getFullList () {
    this.api
    .get('/characters')
    .then(response => console.log(response.data))
    .catch(error => console.log(error));
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

//module.exports = APIHandler;