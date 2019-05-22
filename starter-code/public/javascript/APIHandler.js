class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
     return axios
       .get(`${this.BASE_URL}/characters`)
       
  }
  getOneRegister (id) {
     return axios.get(`${this.BASE_URL}/characters/${id}`)
       




  
        
  }

  createOneRegister (newInfo) {
    return  axios.post(`${this.BASE_URL}/characters`, newInfo)
      

  }

  updateOneRegister (info) {
      return axios.put(
        `https://minions-api.herokuapp.com/characters/${info.id}`,
        info
      );


  }

  deleteOneRegister () {

  }
}
