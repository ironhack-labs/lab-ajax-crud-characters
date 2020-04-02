class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    
    return axios.get(this.BASE_URL + '/characters')
     

  }

  getOneRegister(characterId) {
    
    return axios.get(this.BASE_URL + `/characters/${characterId}`)
   

  }

  createOneRegister(characterInfo) {
    
  return axios.post(`${this.BASE_URL}/characters`, characterInfo)
   
  }

  updateOneRegister(characterId, characterInfo) {
  
    return axios.patch(`${this.BASE_URL}/characters/${characterId}`, characterInfo)

  }

  deleteOneRegister(characterId) {
    
    return axios.delete(`${this.BASE_URL}/characters/${characterId}`)

  }
}
