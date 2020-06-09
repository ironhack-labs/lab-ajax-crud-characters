class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters')
  }

  getOneRegister () {
    return axios.get(this.BASE_URL + '/characters' + id)
  }

  createOneRegister (newChar) {
    return axios.post(this.BASE_URL + '/characters' , newChar)
  }

  updateOneRegister (id, changes) {
    return axios.patch(this.BASE_URL + '/characters' + id, changes)
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + '/characters' + id)
  }
}
