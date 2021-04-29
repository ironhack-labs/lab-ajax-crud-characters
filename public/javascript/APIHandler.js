class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try {
      const response = await axios.get(this.BASE_URL + '/characters');

      return response.data;
    }

    catch (error) {
      console.log(error);
      return [];
    }
  }

  async getOneRegister (id) {
    try {
      const response = await axios.get(this.BASE_URL + '/characters/' + id);

      return response.data;
    }
    
     catch (error) {
      console.log(error)
      return null;
     }
  }

  async createOneRegister (newCharacter) {
    try {
      const response = await axios.post(this.BASE_URL + '/characters', newCharacter);
    
      return response.status;
    }

    catch (error) {
      console.log(error);
      return (404)
    }
  }

  async updateOneRegister (id, updatedCharacter) {
    try {
      const response = await axios.put(this.BASE_URL + '/characters/' + id, updatedCharacter)
     
      return response.status;
    }

    catch (error) {
      console.log(error)
      return 404;
    }
  }

  async deleteOneRegister (id) {
    try {
      const response = await axios.delete(this.BASE_URL + '/characters/' + id);

      return response.status;
    }

    catch (error) {
      console.log(error);
      return 404;
    }
  }
}
