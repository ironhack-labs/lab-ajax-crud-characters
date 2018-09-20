class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then( res => {
      return res.data 
      })
   .catch(e => console.log(e));
};

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then( res => {
      return res.data  
      })
   .catch(e => console.log(e));
};

  createOneRegister (newChara) {
    return axios.post(`${this.BASE_URL}/characters`, newChara)
    .then( res => {
      return res.data  
      })
   .catch(e => console.log(e));
  }

  updateOneRegister (id) {
    return axios.patch(`${this.BASE_URL}/characters/${id}`)
    .then( res => {
      return res.data  
      })
   .catch(e => "Character not found");
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then( () => {
      return "Character has been successfully deleted"  
      })
   .catch(e => "Character not found");
  }
}
