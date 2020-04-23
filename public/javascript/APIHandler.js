class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const {data} = await axios.get(this.BASE_URL)
        return data
       
      }

  async getOneRegister (id) {
    const {data} = await axios.get(`${this.BASE_URL}${id}`)
      return data
    }

  async createOneRegister() {
    const {data} = await axios.post(this.BASE_URL)
      return data
  }

  async updateOneRegister() {
    const {data} = await axios.put(this.BASE_URL)
      return data
  }

  async deleteOneRegister() {
   const {data} = await axios.delete(`${this.BASE_URL}${id}`)
  }
}
