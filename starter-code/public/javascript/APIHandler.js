class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.service = axios.create({
      baseURL: this.BASE_URL
    })
  }

  getFullList() {
    return this.service.get('/')
  }

  getOneRegister(id) {
    return this.service.get(`/${id}`)
  }

  createOneRegister(changes) {
    return this.service.post('/', changes)
  }

  updateOneRegister(id, changes) {
    return this.service.patch(`/${id}`, changes)
  }

  deleteOneRegister(id) {
    return this.service.delete(`/${id}`)
  }
}