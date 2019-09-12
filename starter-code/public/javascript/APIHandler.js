class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    const data = axios.get(`${this.BASE_URL}/characters`)
    return data
  }

  getOneRegister (id) {
    const data = axios.get(`${this.BASE_URL}/characters/${id}`)
    .catch(err => {
      document.getElementById("msg-fetch").innerHTML = 'Character not found';
    })
    return data
  }

  createOneRegister (character) {
    const newChar = axios.post(`${this.BASE_URL}/characters`, character);
    return newChar
  }

  updateOneRegister (id, character) {
    const data = axios.patch(`${this.BASE_URL}/characters/${id}`, character)
    return data
  } 

  async deleteOneRegister (id) {
    const data = await axios.delete(`${this.BASE_URL}/characters/${id}`)
    .catch(err => {
      document.getElementById("msg-delete").innerHTML = 'Character not found';
    })
  }
}
