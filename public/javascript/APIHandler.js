// @ts-nocheck
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
    this.api = axios.create({baseURL: this.BASE_URL})
  }

  getFullList() {
    return this.api.get("/characters")
  }

  getOneRegister(registerId) {
    return this.api.get(`/characters/${registerId}`)
  }

  createOneRegister(registerInfo) {
    return this.api.post('/characters', registerInfo)
  }

  updateOneRegister(registerId, registerInfo) {
    return this.api.put(`/characters/${registerId}`, registerInfo)
  }

  deleteOneRegister(registerId) {
    return this.api.delete(`/characters/${registerId}`)
  }
}
