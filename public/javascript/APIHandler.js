class APIHandler {
  constructor (baseUrl) {
    this.service = axios.create({baseurl})
    //this.BASE_URL = baseUrl;
  }

  getFullList () {
    return this.service.get('/')
  }

  getOneRegister (id) {
    return this.service.get(`/${id}`)
  }

  createOneRegister (data) {
    return this.service.post('/', data)
  }

  updateOneRegister (id, data) {
    return this.service.patch(`/${id}`, data)
  }

  deleteOneRegister (id) {
    return this.service.delete(`/${id}`)
  }
}
