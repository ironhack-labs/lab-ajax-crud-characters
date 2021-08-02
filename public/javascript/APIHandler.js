class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`).then((result) => {
      return result.data
    })
  }

  getOneRegister = async (id) => {
    const result = await axios.get(`${this.BASE_URL}/characters/${id}`)
    return result.data
  }

  createOneRegister = async (character) => {
    if(!character.name || !character.occupation || !character.weapon){
      throw "Missing Fields"
    }
    if(!character.hasOwnProperty('cartoon')){
      character.cartoon = false
    }
    const result = await axios.post(`${this.BASE_URL}/characters`, character)
    return result.data
  }

  updateOneRegister = async (id, updateCharacter) => {
    try {
    const result = await axios.patch(`${this.BASE_URL}/characters/${id}`, updateCharacter)
    return result.data
    } catch (error) {
      throw error
    }
  }

  deleteOneRegister = async (id) => {
    const result = await axios.delete(`${this.BASE_URL}/characters/${id}`)
    return result.data
  }
}
