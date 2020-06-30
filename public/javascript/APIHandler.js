
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    return axios
          .get(this.BASE_URL + '/characters')
          .then(list =>  list.data)
          .catch(error => console.log('getFullList error: ',error))
  }

  getOneRegister (id) {

    return axios
        .get(this.BASE_URL + `/characters/${id}`)
        .then(singleCharacter => singleCharacter.data)
        .catch(error => console.log('getOneRegister error: ',error))
  }

  createOneRegister (obj) {

    return axios
      .post(this.BASE_URL + '/characters', obj)
      .then(() => true)
      .catch(error => console.log('createOneRegister error: ',error))
  }

  updateOneRegister (obj, id) {

    return axios
      .put(this.BASE_URL + `/characters/${id}`, obj)
      .then(() => true)
      .catch(error => console.log('updateOneRegister error: ',error))
  }

  deleteOneRegister (id) {

    return axios
        .delete(this.BASE_URL + `/characters/${id}`)
        .then(() => true)
        .catch(error => console.log('deleteOneRegister error: ',error))
  }
}