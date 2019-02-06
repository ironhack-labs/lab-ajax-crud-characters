class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + "/characters")
      .then(response => response.data)
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
      .then(response => response.data)
  }

  createOneRegister (obj) {
    return axios.post(this.BASE_URL + "/characters", obj)
      .then(response => response.data)
  }

  updateOneRegister (obj) {
    return axios.patch(this.BASE_URL + "/characters/" + obj.id, obj)
      .then(response => response.data)
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + "/characters/" + id)
  }
}
