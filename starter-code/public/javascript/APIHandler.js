class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  //PARA PETICIONES

  getFullList () {
    return axios.get(this.BASE_URL)
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL  + id)
  }

  createOneRegister (data){
    return axios.post(this.BASE_URL , data)
  }

  updateOneRegister (id, data) {
    return axios.put(this.BASE_URL  + id, data)
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL  + id)
  }
}
