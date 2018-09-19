class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then( res => {
      return res.data
   }).catch(e => console.log(e));
}
  
  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then( res => {
      return res.data
   }).catch(e => console.log(e));
}

  createOneRegister (newChar) {
    axios.post(`${this.BASE_URL}/characters/${id}`, newChar)
    .then(res => {
     return res.data;
    }).catch(e => console.log(e));
  }
  

  updateOneRegister () {
     axios.patch(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      return res.data;
    }) 
    .catch(e => "Character not found");
  }

  deleteOneRegister () {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then( () => {
      return "Character has been successfully deleted"
    })
  .catch(e => "Character not found")}
}
