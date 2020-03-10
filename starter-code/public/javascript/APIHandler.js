class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList(){
    return axios.get("http://localhost:8000/characters")
  }
  
  getOneRegister(characterId){
    return axios.get(`http://localhost:8000/characters/${characterId}`)
  }
  

  createOneRegister (newCharacter) {
    return axios.post("http://localhost:8000/characters", {newCharacter})
  }


  updateOneRegister (theId) {
    return axios.put(`http://localhost:8000/characters/${theId}`, {updatedcharacterInfo})
  }

  deleteOneRegister (characterId) {
    return axios.delete(`/characters/${characterId}`)
  }
}