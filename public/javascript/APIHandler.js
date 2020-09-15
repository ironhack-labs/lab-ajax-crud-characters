class APIHandler {

  constructor(baseUrl) {
    

    this.app = axios.create({
      baseURL: `${baseUrl}`
    })

    //this.BASE_URL = baseUrl;

  }

  getFullList = () => this.app.get()

  getOneRegister = characterId => this.app.get(`/${characterId}`)

  createOneRegister = characterInfo => this.app.post('/', characterInfo)

  updateOneRegister = (characterId, characterInfo) => this.app.put(`/${characterId}`, characterInfo)

  deleteOneRegister = charactersId => this.app.delete(`${charactersId}`)
}

