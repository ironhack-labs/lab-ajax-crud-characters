class APIHandler {
  constructor (baseUrl) {
    this.axios = axios.create({baseURL:baseUrl})
    
  }

  getFullList () {
    return this.axios.get('')
    
  }

  getOneRegister (id) {
    return this.axios.get(`/${id}`);
  }

  createOneRegister (newObj) {
    return this.axios.post(newObj);
  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    return this.axios.delete(`/${id}`);
  }
}
