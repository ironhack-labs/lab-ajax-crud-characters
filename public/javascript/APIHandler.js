class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(baseUrl + '/characters')
  }

  getOneRegister () {
    return axios.get(baseUrl + '/characters' + id)
  }

  createOneRegister (newChar) {
    return axios.post(baseUrl + '/characters' , newChar)
  }

  updateOneRegister (id, changes) {
    return axios.patch(baseUrl + '/characters' + id, changes)
  }

  deleteOneRegister (id) {
    return axios.delete(baseUrl + '/characters' + id)
  }
}
