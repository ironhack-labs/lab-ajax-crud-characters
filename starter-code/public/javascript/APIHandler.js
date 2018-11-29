class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      return axios.get(this.BASE_URL + '/characters')
      .then(result =>{
        return result
      }).catch(err=>{
        console.log(err)
      })
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
