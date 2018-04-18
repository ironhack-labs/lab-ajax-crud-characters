'use strict';

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {    
    return axios.get(`${this.BASE_URL}/characters`)
      .then((response) => {
        return response.data;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
  }

  createOneRegister (character) {
    axios.post(`${this.BASE_URL}/characters/`, character)
      .then((response) => {
        console.log('Create SUCCESS!');
      })
      .catch(error => {
        console.log(err);
      });
  }

  updateOneRegister (id, character) {
    axios.put(`${this.BASE_URL}/characters/${id}`, character)
    .then((response) => {
      console.log('Update SUCCESS!');    
    })
    .catch(err => {
      console.log(err);
    });
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
      .then((response) => {
        console.log('Delete SUCCESS!');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
