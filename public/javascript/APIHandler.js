class APIHandler {
  constructor () {
      this.app = axios.create({
        baseURL: 'https://minions-api.herokuapp.com'
      })
    
  }

  getFullList = () =>  this.app.get('/characters')
    
  

  getOneRegister = id => this.app.get(`/characters/${id}`)

  createOneRegister = characterInfo => this.app.post('/characters', characterInfo)

  

  updateOneRegister = (id, characterInfo) => this.app.put(`/characters/${id}`, characterInfo)

  

  

  deleteOneRegister = id => this.app.delete(`/characters/${id}`)


  

}



