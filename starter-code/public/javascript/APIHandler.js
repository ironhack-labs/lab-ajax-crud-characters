class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const chars = await axios.get(`${this.BASE_URL}/characters`)
    return chars.data
  }

  async getOneRegister(id) {
    const char = await axios.get(`${this.BASE_URL}/characters/${id}`)
    return char.data
  }

  async createOneRegister(character) {
    const newChar = await axios.post(`${this.BASE_URL}/characters`, character)
    return newChar
  }

  async updateOneRegister(id, chr) {
    const editChar = await axios.put(`${this.BASE_URL}/characters/${id}`, chr)
    return editChar
  }

  async deleteOneRegister(id) {
    await axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}


