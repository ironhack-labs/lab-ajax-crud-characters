class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  

  getFullList () {
  
  return axios.get(this.BASE_URL + '/characters')
    .then(results => {
      return results.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  getOneRegister (id) {

    return axios.get(this.BASE_URL + '/characters/' + id )
      .then(results =>{
        return results.data
      })
      .catch(err=>console.log(err))


  }

  createOneRegister (character) {

    
    return axios.post(this.BASE_URL +'/characters/',character )
      .then(result =>{
        return result
      })
     .catch(e=>console.log(e))


  }

  updateOneRegister (id,character) {

    return axios.patch(this.BASE_URL + '/characters/' + id,character)
    .then(result =>{
      return result
      })
    .catch(e=>console.log(e))



  }

  deleteOneRegister (id,character) {
    return axios.delete(this.BASE_URL + '/characters/' + id)
    .then(result =>{
      return result
      })
    .catch(e=>console.log(e))

  }
}
