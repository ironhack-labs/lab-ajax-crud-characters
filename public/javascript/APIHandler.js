// const axios = require('axios');

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = () => {
    return axios({
      method: 'GET',
      url: `${this.BASE_URL}/characters`,
    })
    .then(response => {
      // console.log('Response from API is: ', response.data);
      return response.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  getOneRegister = (characterId) => {
    return axios({
      method: 'GET',
      url: `${this.BASE_URL}/characters/${characterId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  createOneRegister = (characterInfo) => {
    return axios.post(`${this.BASE_URL}/characters`, characterInfo)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  updateOneRegister = (characterId, characterInfo) => {
    return axios.put(`${this.BASE_URL}/characters/${characterId}`, characterInfo)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  }

  deleteOneRegister = (characterId) => {
    return axios({
      method: 'DELETE',
      url: `${this.BASE_URL}/characters/${characterId}`,
    })
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
  }
}

const charactersAPI = new APIHandler('http://localhost:8000');

// const APITest = new APIHandler('http://localhost:8000');

// APITest.getFullList();

// module.exports = APIHandler;
