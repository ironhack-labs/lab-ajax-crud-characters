class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try{
      console.log(await axios.get(`${this.BASE_URL}/characters`));
    } catch (error) {
      console.log(error);
    }
  }

  async getOneRegister (id) {
    try {
      console.log(await axios.get(`${this.BASE_URL}/characters/${id}`));
    } catch (error) {
      console.log(error);
    }
  }

  async createOneRegister (register) {
    try {
      console.log(await axios.post(`${this.BASE_URL}/characters`, register));
    } catch (error) {
      console.log(error);
    }
  }

  async updateOneRegister (id, register) {
    try {
      console.log(await axios.put(`${this.BASE_URL}/characters/${id}`, register));
    } catch (error) {
      console.log(error);
    }
  }

  async deleteOneRegister (id) {
    try {
      console.log(await axios.delete(`${this.BASE_URL}/characters/${id}`));
    } catch (error) {
      console.log(error);
    }
  }
}
