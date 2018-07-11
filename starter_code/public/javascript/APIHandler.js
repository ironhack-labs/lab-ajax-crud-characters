class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axios = axios;
  }

  getFullList () {
    return axios.get(this.BASE_URL)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/${id}`)
  }

  createOneRegister (object) {
    return axios.post(this.BASE_URL, object)
  }

  updateOneRegister (object, id) {
    return axios.put(`${this.BASE_URL}/${id}`, object)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/${id}`)
    
  }
}
