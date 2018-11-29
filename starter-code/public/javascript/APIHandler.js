class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + '/characters')
    .then( results => {
      return results
    })
    .catch(err => console.log(err))
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + '/characters/' + id)
    .then( result => {
      return result
    })
    .catch(err => console.log(err))
  }

  createOneRegister (obj) {
    return axios.post(this.BASE_URL + '/characters', obj)
    .then( result => {
      return result
    })
    .catch( err => console.log(err))
  }

  updateOneRegister (obj,id) {
    return axios.patch(this.BASE_URL + '/characters/' + id, obj)
    .then( result => {
      return result
    })
    .catch( err => console.log(err))
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + '/characters/' + id)
    .then(result => {
      return result
    })
    .catch(err => console.log(err))
  }
}
