class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
// axios promises??? 
 async getFullList (id) {
const {data} =await axios.get(`{}/characters`)
return data
  }

 async getOneRegister (id) {
   const {data} = await axios.get(`{}/characters/${id}`)
   return [data]

  }

  async createOneRegister (character) {
const{data} =await axios.post (`{}/characters, character`)
  }

  async updateOneRegister (id, character) {
    const {data} =await axios.put(`${}/characters/${id}`, character)
    return[data]

  }

  async deleteOneRegister (id) {
    return await axios.delete(`{}/characters/${id}`)


  }
}
