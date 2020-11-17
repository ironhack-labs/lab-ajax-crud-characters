class APIHandler {

  constructor() {
    this.axiosApp = axios.create({

      baseURL:'https://minions-api.herokuapp.com/characters'
    })  
  }

  getFullList = () => this.axiosApp.get('/')

  getOneRegister = minionId => this.axiosApp.get(`/${minionId}`)

  createOneRegister = minionInfo => this.axiosApp.post('/', minionInfo)

  updateOneRegister = (minionId, minionInfo) => this.axiosApp.put(`/${minionId}`, minionInfo)

  deleteOneRegister = minionId => this.axiosApp.delete(`/${minionId}`)
}
