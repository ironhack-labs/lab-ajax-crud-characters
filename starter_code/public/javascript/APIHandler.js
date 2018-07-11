class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(results => {
      return results.data;
    });
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(results=>{
      return results.data;
    })
  }

  createOneRegister (object) {
    return axios.post(`${this.BASE_URL}/characters`,object)
    .then(results=>{
      return results.data;
    })
  }

  updateOneRegister (info) {
    return axios.patch(`${this.BASE_URL}/characters/${info.id}`,info)
    .then(results=>{
      console.log(results);
    })
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(
      console.log('sucessfully deleted')
    )
  }
}
