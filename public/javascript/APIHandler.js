class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    return axios
          .get(this.BASE_URL + '/characters')
          .then(list =>  list.data)
          .catch(error => console.log('Oooooops error: ',error))
  }

  getOneRegister (id) {

    return axios
        .get(this.BASE_URL + `/characters/${id}`)
        .then(singleCharacter => singleCharacter.data)
        .catch(error => console.log('Character not found ',error))
  }

  createOneRegister (newCharacter) {

    return axios
      .post(this.BASE_URL + '/characters', newCharacter)
      .then(() => true)
      .catch(error => console.log('Oooooops error: ',error))
  }

  updateOneRegister (updatedCharacter, id) {

    return axios
      .put(this.BASE_URL + `/characters/${id}`, updatedCharacter)
      .then(() => true)
      .catch(error => console.log('Character not found ',error))
  }

  deleteOneRegister (id) {

    return axios
        .delete(this.BASE_URL + `/characters/${id}`)
        .then(() => true)
        .catch(error => console.log('Character not found ',error))
  }
}
