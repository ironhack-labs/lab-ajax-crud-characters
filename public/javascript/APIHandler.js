class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create ({
    baseURL: baseUrl
  })
  }

  getFullList = () => {
    return this.api.get('/characters');
  }

  getOneRegister = (id) => {
    return this.api.get(`/characters/${id}`);
  } //get one character

  createOneRegister = (character) => {
    return this.api.post(`/characters`, character);
  } //create the character

  updateOneRegister = (id, updatedRegister) => {
    return this.api.put(`/characters/${id}`, updatedRegister)
  }; //update the character's info

  deleteOneRegister = (id) => {
    return this.api.delete(`/characters/${id}`);
  } //delete the character
}

