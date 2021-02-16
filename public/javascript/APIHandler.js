class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    
      return axios.get(`${this.BASE_URL}/characters`)
   
  }

  getOneRegister (id) {
    console.log(typeof id)
    console.log(id)
    console.log(`${this.BASE_URL}/characters/${id}`)
    return axios.get(`${this.BASE_URL}/characters/${id}`)
   

  }

  createOneRegister (newCharacter) {
    
    return axios.post(`${this.BASE_URL}/characters/`,newCharacter)
  

  }

  

  updateOneRegister (character) {
    return axios.put(`${this.BASE_URL}/characters/${character.id}`,character)
 

  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
   


  }
}
