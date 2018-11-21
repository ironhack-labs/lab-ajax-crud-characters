class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return axios.get(this.BASE_URL + "/characters")
    .then((response) => {
      return response
    });
  }

  getOneRegister(id) {
     return axios.get(this.BASE_URL + "/characters/"+id)
    .then((response) => {
      return response
    });
  }

  createOneRegister(character) {
   return axios.post(this.BASE_URL + '/characters', character)
    .then((response)=>{
      return response
    })
  }

  updateOneRegister(id, character) {
    console.log(id)
    return axios.put(this.BASE_URL + '/characters/'+id, character)
    .then((response)=>{
      return response
    })
  }

  deleteOneRegister(id) {
   return axios.delete(this.BASE_URL + "/characters/"+id )
    .then((response)=>{
      return response
    })
  }
}
