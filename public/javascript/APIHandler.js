class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    
  }

  getFullList() {

    return axios.get(`${this.BASE_URL}/characters`)
    
      .then()
        .catch(err => console.log(err))

  }

  getOneRegister(id) {

    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then()
      .catch(err => console.log(err))

  }

  createOneRegister(newCharacter) {

return axios.post(`${this.BASE_URL}/characters/`, newCharacter)
  .then()
    .catch(err => console.log(err))

  }

  updateOneRegister(updateCharacter, id) {

  return axios.put(`${this.BASE_URL}/characters/${id}`, updateCharacter)
.then()
  .catch(err => console.log(err))
  }

  deleteOneRegister(id) {

 return axios.delete(`${this.BASE_URL}/characters/${id}`)
.then()
  .catch(err => console.log(err))
    
  }
}
