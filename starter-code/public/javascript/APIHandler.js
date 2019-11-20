class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister(e) {
    e && e.preventDefault()

    axios({
      method: 'post',
      url: `${this.BASE_URL}/characters`,
      data: {

        name: "Sito",
        occupation: "Perro flauta",
        weapon: "Dibusitos",
        cartoon: true

      },
    })
  }

  updateOneRegister(e, id) {
    e && e.preventDefault()

    axios({
      method: 'put',
      url: `${this.BASE_URL}/characters/${id}`,
      data: {
        id : id,
        name: "Sito",
        occupation: "Perro flauta",
        weapon: "Dibusitos",
        cartoon: true
      },
    }).then(() => {
      console.log("Updated. Bg green")
    })
    .catch(err => console.log(`${err} the bg needs to be red`))
  }

  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`).then(oneCharacter => {
      console.log(oneCharacter.data)
    })
  }
}

