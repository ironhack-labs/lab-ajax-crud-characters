class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const fullList = await axios.get(`${this.BASE_URL}/characters`);
    console.log(`Here's the full list ${fullList}`);
    return fullList.data;
  }

  // async getOneRegister () {

  // }

  // async createOneRegister () {

  // }

  // async updateOneRegister () {

  // }

  // async deleteOneRegister () {

  // }
}
const ApiHandle = new APIHandler('http://localhost:8000');