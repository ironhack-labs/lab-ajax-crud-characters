class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + '/characters')
    .then(characters =>{
      return characters.data
    })
  }
  getOneRegister(id) {
    return axios.get(this.BASE_URL + '/characters/' + id)
    .then(oneRegister =>{
      console.log(oneRegister)
    })
  }

  createOneRegister(id, payload) {
    return axios.post(this.BASE_URL + '/characters' + id, payload)
    .then(APIpayload => {
      console.log(APIpayload)
    })
  }

  updateOneRegister(id, payload) {
    return axios.put(this.BASE_URL + '/characters/' + id, payload)
    .then(updateRegister => {
      console.log(updateRegister)
    })
  }

  deleteOneRegister(id) {
    return axios.delete(this.BASE_URL + '/characters/' + id)
    .then(deleteOne => {
      console.log(deleteOne)
    })
  }
}
