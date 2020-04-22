class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = 'https://minions-api.herokuapp.com'

  }

  getFullList() {

    return axios

      .get(this.BASE_URL + '/characters')
      .then(response => {
        console.log(response)
        return response.data
      })

  }

  getOneRegister(id) {

    return axios
      .get(this.BASE_URL + `/characters/${id}`)
      .then(response => {
        console.log(response)
        return response.data
      })
  }

  createOneRegister() {

    return axios
      .post(this.BASE_URL + `/characters/`, { name: name, occupation: occupation, cartoon: cartoon, weapon: weapon })

  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {
    return axios
      .delete(this.BASE_URL + `/characters/${id}`)

  }
}
