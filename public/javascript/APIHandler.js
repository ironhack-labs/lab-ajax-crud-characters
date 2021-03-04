class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + "/characters")

  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + `/characters/${id}`)

  }

  createOneRegister (user) {
    return axios.post(this.BASE_URL + "/characters", user)

  }

  updateOneRegister (id, user) {
    return axios.put(this.BASE_URL + `/characters/${id}`, user)

  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL +`/characters/${id}`)

  }
}
