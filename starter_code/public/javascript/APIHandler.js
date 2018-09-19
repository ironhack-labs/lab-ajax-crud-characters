class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters")
      .then(res => {
        return res.data
      })
  }

  getOneRegister(id) {
    return axios.get(this.BASE_URL + `/characters/${id}`)
      .then(res => {
        return res.data
      })
  }

  createOneRegister() {
    axios.post(this.BASE_URL)
  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}


