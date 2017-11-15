"use strict";

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
    .get(`${this.BASE_URL}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}

  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  createOneRegister (newCharacter) {
    axios
    .post(`${this.BASE_URL}`, newCharacter)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  updateOneRegister (editCharacterId,editCharacter) {
    axios
    .patch(`${this.BASE_URL}/${editCharacterId}`,editCharacter)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  deleteOneRegister (id) {
    axios
    .delete(this.BASE_URL+`/${id}`)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }
}


