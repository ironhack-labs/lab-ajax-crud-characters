class APIHandler {
  constructor (baseUrl) {
    this.axios = axios.create({baseURL:baseUrl})
    
  }

  getFullList () {
    return this.axios.get('')
    //.then (re => console.log(re))
  }

  getOneRegister (id) {
    return this.axios.get(`/${id}`);
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    return this.axios.delete(`/${id}`);
  }
}
