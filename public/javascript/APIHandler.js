class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (newCharacter) {
    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
  }

  updateOneRegister (id, updatedCharacter) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, updatedCharacter)
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}

{/* <div class="character-info">
        <div class="name">Character Name</div>
        <div class="occupation">Character Occupation</div>
        <div class="cartoon">Is a Cartoon?</div>
        <div class="weapon">Character Weapon</div>
      </div> */}