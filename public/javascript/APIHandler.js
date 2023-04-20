class APIHandler {
  constructor (baseUrl) {
    // this.BASE_URL = baseUrl
    this.api = axios.create({
      baseURL: baseUrl
    })
  }

  getFullList () {
    return this.api.get('/characters')
  }

  getOneRegister (caracterId) {
    return this.api.get(`/characters/${caracterId}`)
  }

  createOneRegister (caracterInfo) {
    return this.api.post('/characters', caracterInfo)
  }

  updateOneRegister (caracterId, caracterInfo) {
    return this.api.put(`/characters/${caracterId}`, caracterInfo)
  }

  deleteOneRegister (caracterId) {
    return this.api.delete(`/characters/${caracterId}`)
  }
}
