class APIHandler {
  constructor (baseUrl) {
    this.axios = axios.create({baseURL: baseUrl});
  }

  getFullList () {
    return this.axios.get('')
    
  }

  getOneRegister (id) {

    return this.axios.get(id)

  }

  createOneRegister (nuevo) {
    return this.axios.post('', nuevo)
  }

  updateOneRegister (id, editar ) {
    return this.axios.patch(id,editar)
  }

  deleteOneRegister (id) {

    return this.axios.delete(id)
  }
}