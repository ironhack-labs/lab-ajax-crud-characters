class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.charactersService = axios.create({
      baseURL: `${baseUrl}`
    })
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`) //this.charactersService.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister (name, occupation , weapon, cartoon) {
    // const {name, occupation, weapon, cartoon} = character;
    axios.post(`${this.BASE_URL}/characters`, {name, occupation , weapon, cartoon })
  }

  updateOneRegister (id, name, occupation , weapon, cartoon) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`, {name, occupation , weapon, cartoon })
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
