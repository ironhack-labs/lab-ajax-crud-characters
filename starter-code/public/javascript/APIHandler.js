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
    return this.charactersService.get(`${this.BASE_URL}/characters/${id}`);
  }

  createOneRegister (name, occupation, weapon, cartoon) {
    this.charactersService.post('/characters', { name, occupation, weapon, cartoon})
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
