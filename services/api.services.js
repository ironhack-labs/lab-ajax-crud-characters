const axios = require('axios')
const apiService = require("./services/api.service");

class ApiService {
    constructor() {
        this.api= axios.create ({
            baseURL: "http://localhost:8000/characters"
        })
    }

   // Get all characters
   getAllCharacters() {
    return axios.get(this.baseURL)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  // Get a single character
  getCharacter(id) {
    return axios.get(`${this.baseURL}/${id}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  // Create a new character
  createCharacter(data) {
    return axios.post(this.baseURL, data)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  // Delete a character
  deleteCharacter(id) {
    return axios.delete(`${this.baseURL}/${id}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }

  // Edit a character
  editCharacter(id, data) {
    return axios.put(`${this.baseURL}/${id}`, data)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }
}

module.exports = ApiService