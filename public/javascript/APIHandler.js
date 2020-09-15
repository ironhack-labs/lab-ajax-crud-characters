class APIHandler {
  constructor () {
    this.app = axios.create({
        baseURL: 'https://minions-api.herokuapp.com/'
    });
    console.log('Instancia creada y aplicación inicializada:')
  }

  getFullList = () => this.app.get('characters')

  getOneRegister = charId => this.app.get(`characters/${charId}`)

  createOneRegister = registerInfo => this.app.post('characters',registerInfo)
  
  updateOneRegister = (charId, charInfo) => this.app.put(`characters/${charId}`, charInfo)

  deleteOneRegister = charId => this.app.delete(`characters/${charId}`)
}
