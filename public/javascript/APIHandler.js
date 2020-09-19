class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList() {
    return axios.get(this.BASE_URL + '/characters')
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister(name,occupation,weapon,cartoon) {
    axios.post(`${this.BASE_URL}/characters/`,
    {
      name,
      occupation,
      weapon,
      cartoon
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {
    return axios.delete (`${this.BASE_URL}/characters/${id}`)
  }
}
