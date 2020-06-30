class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;

    this.axiosApp = axios.create({
      // this.BASE_URL es igual a http://localhost:8000
      baseURL: this.BASE_URL
    })

  }

  getFullList() {
    const data = this.axiosApp
      .get('/characters')
      .then(response => response.data)
      .catch(err => console.log(err))

    return data

  }


  getOneRegister(id) {
    const data = this.axiosApp
      .get(`/characters/${id}`)
      .then(response => response.data)
      .catch(err => console.log(err))
    return data
  }

  createOneRegister(character) {
    const data = this.axiosApp
      .post('/characters', character)
      .then(response => console.log('Crear nuevo', response.data))
      .catch(err => console.log('err', err))

  }


  updateOneRegister(newData, id) {
    const data = this.axiosApp
      .put(`/characters/${id}`, newData)
      .then(response => response.data)
      .catch(err => console.log(err))

    return data


  }

  deleteOneRegister(id) {
    this.axiosApp.delete(`/characters/${id}`)
      .then(response => console.log('eliminar', response))
      .catch(err => console.log(err))

  }
}
