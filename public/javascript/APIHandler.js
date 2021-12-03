class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const data = await axios.get(this.BASE_URL+"/characters")
    return data
  }

  async getOneRegister (id) {
    const data = await axios.get(this.BASE_URL+"/characters/"+id)
    return data
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
