class APIHandler {
  constructor (baseUrl) {
    this.axios = axios.create({baseURL:baseUrl})
    
  }

  getFullList () {
    return this.axios.get('')
    //.then (re => console.log(re))
  }

  getOneRegister (id) {
    return this.axios.get(`/${id}`)
  }

  createOneRegister () {
    return this.axios.post(`/${id}`)
  }

  updateOneRegister () {
    return this.axios.put(`/${id}`)
  }

  deleteOneRegister (id) {
    return this.axios.delete(`/${id}`)
  }
}
