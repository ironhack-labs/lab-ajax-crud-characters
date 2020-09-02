class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const {data: characters} = await axios.get(`${this.BASE_URL}/characters`)
    return characters
  }

  async getOneRegister (id) {
    const {data: characters} = await axios.get(`${this.BASE_URL}/characters/${id}`)
    return characters
  }

  async createOneRegister (name, occupation, weapon, cartoon) { 
    await axios.post(`${this.BASE_URL}/characters`, {name: name, occupation: occupation , weapon: weapon, cartoon: cartoon})
  }

  async updateOneRegister (id, name, occupation, weapon, cartoon) {
    await axios.put(`${this.BASE_URL}/characters/${id}`, {name: name, occupation: occupation , weapon: weapon, cartoon: cartoon})
  }

  async deleteOneRegister (id) {
    await axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
