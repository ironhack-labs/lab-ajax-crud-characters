//const charactersAPI = require(".");

class APIHandler {
  constructor (baseUrl) {
    this.service = axios.create({baseUrl:'http://localhost:8000'});
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios
      .get(this.BASE_URL + '/characters')
      .then(response => response.data)
      .catch(err => console.log(err));
    // return this.service.get('/characters');

  }
  

  getOneRegister (id) {
    return axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then(response => response.data) // ça doit être un JSON:id
      .catch(err => console.log(err));

    
  }

  createOneRegister (object) {
    
    return axios
      .post(this.BASE_URL + `/characters`)
      .then(response => response.data) // ça doit être un JSON:id
      .catch(err => console.log(err));

  }

  updateOneRegister (id) {
    return axios
    .patch(this.BASE_URL + `/characters/${id}`)
    .then(response => response.data) // ça doit être un JSON:id
    .catch(err => console.log(err));
  }

  deleteOneRegister (id) {
    
    return axios
    .delete(this.BASE_URL + `/characters/${id}`)
    .then(response => response.data) // ça doit être un JSON:id
    .catch(err => console.log(err));
  }
}
