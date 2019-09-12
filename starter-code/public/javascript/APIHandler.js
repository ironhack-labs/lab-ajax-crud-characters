class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({baseURL: baseUrl});
  }

   async getFullList() {
     const apiresponse = await this.api.get()
     return apiresponse.data
  }

  async getOneRegister (id) {
    const apiresponse = await this.api.get(id)
    return apiresponse.data
  }

  async createOneRegister (character) {
    await this.api.post('', character)
  }

  async updateOneRegister (id, newdata) {
    await this.api.patch(id, newdata)

  }

  async deleteOneRegister (id) {
    await this.api.delete(id)
  }
}
