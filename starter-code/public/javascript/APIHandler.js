class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters/')
    .then(result=>{
      return result
    })
    .catch(err=>console.log(err))
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + '/characters/' + id)
    .then(result=>{
      return result
    })
    .catch(err=>console.log(err))
  }

  createOneRegister (character) {
    return axios.post(this.BASE_URL + '/characters/',character)
    .then(result=>{
      return result
    })
    .catch(err=>console.log(err))
  }

  updateOneRegister (id,character) {
    return axios.patch(this.BASE_URL + '/characters/' + id,character)
    .then(result=>{
      return result
    })
    .catch(err=>console.log(err))
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + '/characters/' + id)
    .then(result=>{
      return result
    })
    .catch(err=>console.log(err))
  }
}
