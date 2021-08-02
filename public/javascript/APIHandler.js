class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = 'http://localhost:8000'
  }

  getFullList () {
     return  axios.get(`${this.BASE_URL}/characters`)
    
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    

  }
  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)

  }

  createOneRegister (newCharacter) {
    if(!newCharacter.name || !newCharacter.occupation || !newCharacter.weapon){
      throw 'missing fields'
    }
    if(newCharacter.hasOwnProperty('cartoon')){
      newCharacter.cartoon = false
    }
    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
  }

  updateOneRegister (id, updateCharacter) {

    try {
      const result = axios.put(`${this.BASE_URL}/characters/${id}`, updateCharacter)
      
      
    } catch (error) {
      throw error
    }



  }

}



