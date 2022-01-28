class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = async () => {
    try {
      const { data } = await axios.get(`${this.BASE_URL}/characters`)
      return data 
    } catch (error) {
      return error
    }
  }

  getOneRegister = async () => {

    const inputValue = document.getElementsByName("character-id")[0].value

    if (inputValue) {
      try {
        const { data } = await axios.get(`${this.BASE_URL}/characters/${inputValue}`)
      } catch (error) {
        return error
      }
    }
  }

  createOneRegister =  async () => {
    
    const newCharacter = {
      "name": document.getElementsByName("name")[0].value,
      "occupation": document.getElementsByName("occupation")[0].value,
      "cartoon": document.getElementsByName("cartoon")[0].value,
      "weapon": document.getElementsByName("weapon")[0].value
    }

    try {
      const { data } = await axios.post(`${this.BASE_URL}/characters`,newCharacter)
      console.log(data)
      return data 
    } catch (error) {
      return error
    }

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
/*
// service/index.js

const axios = require('axios');

class CharactersApi {
  constructor() {
    this.api = axios.create({
      baseURL: 'https://ih-crud-api.herokuapp.com'
    });
  }

  getAllCharacters = () => this.api.get('/characters');

  getOneCharacter = characterId => this.api.get(`/characters/${characterId}`);

  createCharacter = characterInfo => this.api.post(`/characters`, characterInfo);

  editCharacter = (characterId, characterInfo) => this.api.put(`/characters/${characterId}`, characterInfo);

  deleteCharacter = characterId => this.api.delete(`/characters/${characterId}`);
}

module.exports = CharactersApi;
*/