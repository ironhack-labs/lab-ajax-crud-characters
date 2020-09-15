class APIHandler {
  constructor () {
    this.app = axios.create({
        baseURL: 'https://minions-api.herokuapp.com/'
    });
    console.log('Instancia creada y aplicación inicializada:')
  }

  getFullList = () => this.app.get('characters')

  getOneRegister = charId => this.app.get(`characters/${charId}`)

  createOneRegister(name, occupation, weapon, cartoon){
      this.app.post(`characters`,{
          name,
          occupation,
          weapon,
          cartoon
      })
  }

  updateOneRegister (id, name, occupation, weapon, cartoon) {
      this.app.put(`characters/${id}` ,{
          id,
          name,
          occupation,
          weapon,
          cartoon
      })
    }

  deleteOneRegister = charId => this.app.delete(`characters/${charId}`)
}
