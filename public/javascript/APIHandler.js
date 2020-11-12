class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)

  }

  getOneRegister (ID) {
return axios.get(`${this.BASE_URL}/characters/${ID}`)
  }

  createOneRegister (object) {
    // const {name, occupation,cartoon,weapon} = object
    axios.post(`${this.BASE_URL}/characters`, object)
  }

  updateOneRegister (ID, object) {
    axios.patch(`${this.BASE_URL}/characters/${ID}`, object)
  }

  deleteOneRegister (ID) {
    axios.delete(`${this.BASE_URL}/characters/${ID}`)
    // .then(err) { 
    //   return `Character has been successfully deleted ${ID}`
    // }
  }


}
