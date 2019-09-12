class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {
    const characters = await axios.get(this.BASE_URL)
    return characters.data
  }

  async getOneRegister (id) {
    const characters = await axios.get(`${this.BASE_URL}/${id}`)
    return characters.data
  }

  async createOneRegister(char){
    const newCharacter = await axios.post(this.BASE_URL, char)
    return newCharacter.data
  }


  async updateOneRegister(id, char){
    const updateOne = await axios.patch(`${this.BASE_URL}/${id}`, char)
    return updateOne.data
  }

  async deleteOneRegister(id){
    const character = await axios.delete(`${this.BASE_URL}/${id}`)
    
  }
}