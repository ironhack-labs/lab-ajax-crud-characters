class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL+'/characters')
        .then(results =>{
          return results
        })
        .catch(e=> console.log(e))
  }

  getOneRegister (id) {
      return axios.get(this.BASE_URL+'/characters/'+id)
          .then(results =>{
              return results
          })
          .catch(e=> console.log(e))
  }

  createOneRegister (char) {
      return axios.post(this.BASE_URL+'/characters',char)
          .then(results =>{
              return results
          })
          .catch(e=> console.log(e))
  }

  updateOneRegister (char) {
      return axios.patch(this.BASE_URL+'/characters/'+char.id,char)
          .then(results =>{
              return results
          })
          .catch(e=> console.log(e))
  }

  deleteOneRegister (id) {
      return axios.delete(this.BASE_URL+'/characters/'+id)
          .then(results =>{
              return results
          })
          .catch(e=> console.log(e))
  }
}
