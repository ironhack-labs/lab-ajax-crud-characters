class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList () {
    return axios.get(this.BASE_URL)
  }

  getOneRegister (id) {
    if(!id){
      return new Promise((res,reject)=>reject("Need id to get one char"))
    }
    return axios.get(this.BASE_URL + id)
  }

  createOneRegister (character) {
    return axios.post(this.BASE_URL,character)
  }

  updateOneRegister (id,character) {
    if(!id){
      return new Promise((res,reject)=>reject("Need id to update"))
    }
    return axios.patch(this.BASE_URL + id,character)
  }

  deleteOneRegister (id) {
    if(!id){
      return new Promise((res,reject)=>reject("Need if to delete"))
    }
    return axios.delete(this.BASE_URL + id)
  }
}