class APIHandler {
  constructor(baseUrl) {
    this.axios = axios.create({ baseURL: baseUrl })
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return this.axios.get()
  }

  getOneRegister(Id) {
    return this.axios.get(Id)
  }

  createOneRegister(obj) {
    return this.axios.post('', obj)
  }

  updateOneRegister(Id,char) {
    return this.axios.patch(Id,char)
  }

  deleteOneRegister(id) {
return this.axios.delete(id)
  }
}
