class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList() {
    const {data} = await axios.get(`${this.BASE_URL}/characters`)
    return data
  }

  async getOneRegister(id) {
    const {data} = await axios.get(`${this.BASE_URL}/characters/${id}`)
    return data
  }

  async deleteOneRegister(id) {
    await axios.delete(`${this.BASE_URL}/characters/${id}`)
  }

  async createOneRegister(data) {
     await axios.post(`${this.BASE_URL}/characters/`, data)
  }

  async updateOneRegister(id, data) {
    await axios.patch(`${this.BASE_URL}/characters/${id}`, data)
  }
}
