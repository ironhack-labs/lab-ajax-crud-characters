class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    try {
      const data =  await axios.get(`${this.BASE_URL}/characters`)
      console.log(data.data);
      return data.data;
    } catch (error) {
      console.log(error)
    }
  }
  
  async getOneRegister (id) {
    try {
      const data = await axios.get(`${this.BASE_URL}/characters/${id}`)
      console.log('GetOneRegiser ', data.data)
      if(data.data.id){
        console.log('El data es: ', data.data);
        console.log('El data id es: ', data.data.id);
        return data.data.id;
      }
    } catch (error) {
      console.log(error)
    }
  }

  async createOneRegister (infoPost) {
    try {
      await axios.post(`${this.BASE_URL}/characters/${infoPost}`);
    } catch (error) {
      console.log(error)
    }
  }

  async updateOneRegister (infoUpdate) {
    try {
      await axios.patch(`${this.BASE_URL}/characters/${infoUpdate.id}`, infoUpdate);
    } catch (error) {
      console.log(error)
    }
  }

  async deleteOneRegister (id) {
    try {
      await axios.delete(`${this.BASE_URL}/characters/${id}`);
    } catch (error) {
      console.log(error) 
    }
  }
}

const charactersAPI2 = new APIHandler('http://localhost:8000');
charactersAPI2.getFullList();
