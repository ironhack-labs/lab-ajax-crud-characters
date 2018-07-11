class APIHandler {
  constructor (baseUrl) {
    this.axios = axios.create({baseURL:baseUrl})
    this.baseUrl = baseUrl;
  }

  getFullList () {
    return this.axios.get('')
    
  }

  getOneRegister (id) {
    return this.axios.get(`/${id}`);
  }

  createOneRegister (newObj) {
    return this.axios.post(this.baseUrl, newObj);
  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    return this.axios.delete(`/${id}`);
  }
}
