class APIHandler {
  constructor() {

        //console.log('API handler inicializada')

        this.axiosApp = axios.create({
            baseURL: ' https://minions-api.herokuapp.com'
        })
    }

  getFullList = () => this.axiosApp.get('/characters')
    
  

  getOneRegister  = charactersId => this.axiosApp.get(`/characters/${charactersId}`)


  createOneRegister = charactersInfo => this.axiosApp.post('/characters', charactersInfo)

  

  updateOneRegister = (charactersId, charactersInfo) => this.axiosApp.put(`/characters/${charactersId}`, charactersInfo)

  

  deleteOneRegister  = charactersId => this.axiosApp.delete(`/characters/${charactersId}`)

  
}
