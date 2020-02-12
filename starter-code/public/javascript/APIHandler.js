class APIHandler {
  constructor(baseUrl) {
    this.app = new axios.create({ baseURL: baseUrl })
  }

  getFullList() {
    return this.app.get('characters')
      .then(list => list.data)
      .catch(err => console.log('Ha habido un error: ', err))
  }

  getOneRegister(id) {
    return this.app.get(`characters/${id}`)
      .then(register => register.data)
      .catch(err => console.log('Ha habido un error: ', err))
  }

  createOneRegister(character) {
    return this.app.post('characters', character)
      .then(register => register.data)
      .catch(err => console.log('Ha habido un error: ', err))
  }

  updateOneRegister(id, minion) {
    return this.app.put(`characters/${id}`, minion)
      .then(updated => updated.data)
      .catch(err => console.log("Ha habido un error: ", err))
  }

  deleteOneRegister(id) {
    this.app.delete(`characters/${id}`)
      .catch(err => console.log("Ha habido un error: ", err))
  }
}
