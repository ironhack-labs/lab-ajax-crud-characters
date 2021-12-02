class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const resData = await axios.get(this.BASE_URL+"/characters")
    return resData
  }

  getOneRegister () {

  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
