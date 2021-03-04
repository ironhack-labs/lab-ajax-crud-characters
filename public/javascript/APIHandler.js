class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL + "/characters") ;
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + "/characters/" + id)
  }

  createOneRegister (values) {
    const {name, occupation, cartoon, weapon} = values ;
    return axios.post(this.BASE_URL + "/characters",
      { 
        name: name, 
        occupation: occupation, 
        cartoon: cartoon, 
        weapon: weapon 
      }
    )
  }

  updateOneRegister (id, values) {
    const {name, occupation, cartoon, weapon} = values ;
    return axios.put(this.BASE_URL + "/characters/" + id,
      { 
        name: name, 
        occupation: occupation, 
        cartoon: cartoon, 
        weapon: weapon 
      }
    )
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + "/characters/" + id)
  }
}
