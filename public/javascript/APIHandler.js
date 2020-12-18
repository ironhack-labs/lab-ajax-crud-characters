class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.APIRequest = axios.create({
      baseURL : this.BASE_URL
    })
  }

  async getFullList () {
    try {
      const { data: allCharact } = await this.APIRequest.get('/characters')
      console.log('allCharact', allCharact)
      return allCharact;
    } catch  (err) {
      console.error(err)
    }
  }

  async getOneRegister (charactID) {
    try {
      const { data: singleCharact } = await this.APIRequest.get(`/characters/${charactID}`)
      return singleCharact
    } catch (err) {
      console.error(err)
    }
  }

  async createOneRegister (newCharactInfo) { 
    try {
      const newCharact = await this.APIRequest.post('/characters', newCharactInfo)
      return newCharact
    } catch (err) {
      console.error(err)
    }
  }

  async updateOneRegister (infoToUpdate) {
    try {
      const {id, name, occupation, weapon, cartoon} = infoToUpdate
      const updatedCharactInfo = await this.APIRequest.put(`/characters/${id}`, {name, occupation, weapon, cartoon})
      return updatedCharactInfo;
    } catch (err) {
      console.error(err)
    }
  }

  async deleteOneRegister (charactID) {
    try {
      const { data: singleCharact } = await this.APIRequest.delete(`/characters/${charactID}`)
      return singleCharact;
    } catch (err) {
      console.error(err)
    }
  }
}
