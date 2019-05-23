class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(response => response.data)
  }

  getClear() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister(character) {
    // la funcion recibe axios 
    return axios.post(`${this.BASE_URL}/characters`, character)
  }

  updateOneRegister(id, update) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, update)
  }

  deleteOneRegister(id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }

  // ANTI MANU
  deleteMuch() {
    this.getFullList()
      .then(response => {
        console.log(response)
        response.forEach(character => {
          this.deleteOneRegister(character.id)
            .then(x => console.log('todos borrados'))
        })
      })
  }
}
