class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get('https://ih-crud-api.herokuapp.com/characters').then((response) => {
      return response.data
    })
  }

  getOneRegister(id) {
    return axios.get('https://ih-crud-api.herokuapp.com/characters/' + id).then((response) => {
      return response.data
    })
  }

  createOneRegister({
    name,
    occupation,
    debt,
    weapon
  }) {
    return axios.post('https://ih-crud-api.herokuapp.com/characters/', {
      name,
      occupation,
      debt,
      weapon
    })
  }

  updateOneRegister({
    id,
    name,
    occupation,
    debt,
    weapon
  }) {
    return axios.put('https://ih-crud-api.herokuapp.com/characters/' + id, {
      name,
      occupation,
      debt,
      weapon
    })
  }

  deleteOneRegister(id) {
    axios.delete('https://ih-crud-api.herokuapp.com/characters/' + id)
  }
}

var a = new APIHandler('t')