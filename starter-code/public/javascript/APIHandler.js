class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList () {
    return axios.get(this.BASE_URL + "/characters")
      .then(response => response.data)
  }
  getOne (id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
      .then(response => response.data)
  }
  createOne (body) {
    return axios.post(this.BASE_URL + '/characters/', body)
    .then(response => response.data)
    .catch(error=>{
      console.log(error)
    })
  }
  // 2 parameters: the id and the body (new information for the character)
  updateOne (id, body) {
    return axios.put(this.BASE_URL + "/characters/" + id, body)
      .then(response => response.data)
  }

  deleteOne (id) {
    return axios.delete(this.BASE_URL + "/characters/" + id)
      .then(response => response.data)
      .catch(error=>{
        console.log(error)
      })
  }
}
