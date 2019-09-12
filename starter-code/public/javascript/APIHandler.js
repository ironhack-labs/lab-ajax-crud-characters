class APIHandler {

  constructor(baseUrl) {
    this.BASE_URL = baseUrl;

  }


  getFullList() {
    return axios.get(this.BASE_URL)
  }

  getOneRegister(charId) {
    return axios.get(this.BASE_URL + `/${charId}`)
  }

  createOneRegister(newChar) {
    return axios.post(this.BASE_URL, newChar)
  }

  updateOneRegister(charId, updateChar) {
    return axios.patch(this.BASE_URL + `/${charId}`, updateChar)
  }

  deleteOneRegister(charIdValueDel) {
    console.log(this.BASE_URL + `/${charIdValueDel}`)
    return axios.delete(this.BASE_URL + `/${charIdValueDel}`)
  }
}