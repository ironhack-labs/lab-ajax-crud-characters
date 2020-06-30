class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    return axios
        .get(this.BASE_URL + '/characters')
        .then(fullList => fullList.data)
        .catch(err => console.log('error', err))

  }

  getOneRegister (id) {

    return axios
        .get(this.BASE_URL + `/characters/${id}`)
        .then(oneRegister => oneRegister.data)
        .catch(err => console.log('error', err))


  }

  createOneRegister (newRegister) {

    return axios
        .get(this.BASE_URL + '/characters', newRegister)
        .then(response => response.data)
        .catch(err => console.log('error', err))

  }


  updateOneRegister (id, updatedCharacter) {

    return axios
        .put(this.BASE_URL + `/characters/${id}`, updatedCharacter)
        .then(response => response.data)
        .catch(err => console.log('errorupdate', err))

  }

  deleteOneRegister (id) {

    return axios
        .delete(this.BASE_URL + `/characters/${id}`)
        .then(response => response.data)
        .catch(err => console.log('error', err))

  }
}
