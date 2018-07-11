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

  createOneRegister () {
    return axios.post(`${this.BASE_URL}`)
  }

  updateOneRegister (id) {
    return axios.put(`${this.BASE_URL}/${id}`)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/${id}`)
    
  }
}
