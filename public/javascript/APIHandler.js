/*jshint esversion: 6 */ 

class APIHandler {

  constructor() {
    
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com'
    })

  }

  getFullList = () => this.axiosApp.get('/characters')



  getOneRegister = idCharacter => this.axiosApp.get(`/characters/${idCharacter}`)



  createOneRegister = characterInfo => this.axiosApp.post('/characters', characterInfo)


 
  updateOneRegister = (idCharacter, characterInfo) => this.axiosApp.put(`/characters/${idCharacter}`, characterInfo)



  deleteOneRegister = idCharacter => this.axiosApp.delete(`/characters/${idCharacter}`)
  
}