class APIHandler {
  constructor() {
    this.axiosApp = axios.create({
        baseURL: 'https://minions-api.herokuapp.com/characters'
    })
  }

  getFullList = () => this.axiosApp.get('/')

  getOneRegister = registerId => this.axiosApp.get(`/${registerId}`)

  createOneRegister = registerInfo => this.axiosApp.post('/', registerInfo)

  updateOneRegister = (registerId, registerInfo) => this.axiosApp.put(`/${registerId}`, registerInfo)

  deleteOneRegister = registerId => this.axiosApp.delete(`/${registerId}`)
}
