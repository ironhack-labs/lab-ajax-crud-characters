class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
        
   return axios.get(`${this.BASE_URL}/characters`);
  }

  getOneRegister (id) {

    return  axios.get(`${this.BASE_URL}/characters/${id}`);      
  }

  createOneRegister (newCharacter) {

    return  axios.post(`${this.BASE_URL}/characters/`, newCharacter);  
  }

  updateOneRegister (id, updateCharacter) {

    return  axios.put(`${this.BASE_URL}/characters/${id}`, updateCharacter);  
  }

  deleteOneRegister (id) {

    return  axios.delete(`${this.BASE_URL}/characters/${id}`);  
  }
}
