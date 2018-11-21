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
        console.log('post successful and the response is: ', response);
      })
      .catch(error => {
        console.log('Oh No! Error is: ', error);
      })
  }

  updateOneRegister() {

  }

  //Test later
  deleteOneRegister() {
    axios.delete(this.BASE_URL + "/characters/" + id)
      .then(data => {
        return data.data
      })
      .catch(err => console.log(err))

  }
}

