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
 
    return axios.get(`${this.BASE_URL}/characters/?id=${id}`)
    .then((character)=>{
      // console.log(character.data[0]);
      return character.data[0]
    })
  }
 
  createOneRegister (obj) {

    console.log (obj);

    return axios.post(`${this.BASE_URL}/characters`, obj);
  }
 
  updateOneRegister () {
 
  }
 
  deleteOneRegister () {
 
 
  }
 }