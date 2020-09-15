class APIHandler {
  constructor () {
    this.app = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/'
    })
  }

  getFullList = () => this.app.get('characters')

  getOneRegister = registerId => this.app.get(`characters/${registerId}`)

  createOneRegister = createRegister => this.app.post('characters', createRegister)

  updateOneRegister = (registerId, registerInfo) => this.app.put(`characters/${registerId}`, registerInfo)

  deleteOneRegister = registerId => this.app.delete(`characters/${registerId}`)
}

  
