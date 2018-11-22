class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters")
      .then(data => data.data)
      .catch(err => console.log(err))
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
      .then(data => data.data)
      .catch(err => console.log(err))
  }

  createOneRegister(character) {
    return axios.post(this.BASE_URL + "/characters", character)
      .then(response => response.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  updateOneRegister(id, infoCharacter) {
    return axios.put(this.BASE_URL + "/characters/" + id, infoCharacter)
      .then(response => response.data)
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + "/characters/" + id)
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}

