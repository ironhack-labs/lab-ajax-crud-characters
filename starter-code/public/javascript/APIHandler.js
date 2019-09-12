class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
  }

  getFullList() {
    return axios.get('http://localhost:8000/characters').then(response => {
      return response
    })
  }

  getOneRegister(id) {
    return axios.get(`http://localhost:8000/characters/${id}`).then(response => {
      return response
    })
  }

  createOneRegister(character) {
    return axios
      .post(`http://localhost:8000/characters/`, character)
      .then(response => {
        return response
      })
      .catch(error => {
        document.getElementById('send-data').style.backgroundColor = 'red'
        console.log(error)
        //red
      })
  }

  updateOneRegister(id, character) {
    return axios.patch(`http://localhost:8000/characters/${id}`, character).then(response => {
      return response
    })
  }

  deleteOneRegister(id) {
    return axios.delete(`http://localhost:8000/characters/` + id).then(response => {
      return response
    })
  }
}
