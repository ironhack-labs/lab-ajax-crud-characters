class APIHandler {
  constructor () {
    this.app=axios.create({
        baseURL : 'https://minions-api.herokuapp.com/'
      })
  }

  getFullList = () => this.app.get('characters')
  getOneRegister = characterId=>this.app.get(`characters/${characterId}`)
  createOneRegister = characterInfo => this.app.post('characters',characterInfo)
  updateOneRegister = (characterId,characterInfo)=>this.app.put(`/characters/${characterId}`, characterInfo) 
  deleteOneRegister =characterId => this.app.delete(`characters/${characterId}`) 
}
