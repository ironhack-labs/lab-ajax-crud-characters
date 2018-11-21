class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;

  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters")
      .then(data => {
        return data.data
      })
      .catch(err => console.log(err))

  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
      .then(data => {
        return data.data
      })
      .catch(err => console.log(err))

  }

  createOneRegister(character) {
    return axios.post(this.BASE_URL + "/characters", character)
      .then(response => {
        return response.data
      })
      .catch(error => {
        console.log('Oh No! Error is: ', error);
      })
  }

  updateOneRegister(id, infoCharacter) {
    console.log(id)
    console.log(infoCharacter);
    return axios.put(this.BASE_URL + "/characters/" + id, infoCharacter)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.log('Oh No! Error is: ', error);
    })

  }

  //Test later
  deleteOneRegister(id) {

    return axios.delete(this.BASE_URL + "/characters/" + id)
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))

  }

}

