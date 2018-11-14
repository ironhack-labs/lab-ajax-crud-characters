class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
     return axios.get(`${this.BASE_URL}/characters`)
    .then(res => res.data)
    
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => res.data)
 
     
  }

  createOneRegister (newdata) {
    axios.post(`${this.BASE_URL}/characters)`, {newdata})
    .then(res => console.log({newdata}))
  }

  updateOneRegister (id, update) {
    axios.patch(`${this.BASE_URL}/characters/${id}`, {update})

  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    // console.log(res);

  }

}