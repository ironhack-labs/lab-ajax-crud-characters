// const axios = require("axios") 
// imported in HTML already

class APIService {
    constructor() {
        this.api = axios.create({
          baseURL: 'http://localhost:8000'
        });
      }

      // constructor(baseUrl) { 
      //   this.api = axios.create({
      //     baseURL: baseUrl
      //   });
      // }
     // -> then in index.js const apiService = new ApiService('http://localhost:8000');
  
    getFullList() {
      return this.api.get("/characters")
    }
  
    getOneRegister(characterId) {
      return this.api.get(`/characters/${characterId}`)
  
    }
  
    createOneRegister(characterInfo) {
      return this.api.post("/characters", characterInfo)
  
    }
  
    updateOneRegister(characterId, characterInfo) {
      return this.api.put(`/characters/${characterId}`, characterInfo)
  
    }
  
    deleteOneRegister(characterId) {
  return this.api.delete(`/characters/${characterId}`)
    }
  }

  module.exports = APIService;