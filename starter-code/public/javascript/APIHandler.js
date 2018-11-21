class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
 
  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then((character)=>{
       return character.data;
    })
    .catch(err=>{
      console.log(err)
    })
  }
 
  getOneRegister (id) {
 
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then((character)=>{
      return character.data[0]
      //console.log(character.data[0])
    })
  }
 
  createOneRegister (object) {

    return axios.post(`${this.BASE_URL}/characters`, object)
  }
 
  updateOneRegister () {
 
  }
 
  deleteOneRegister () {
 
 
  }
 }