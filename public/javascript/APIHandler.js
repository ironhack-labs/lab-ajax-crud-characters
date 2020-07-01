class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  
  getFullList() {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then(res => {
      console.log('API Response', res)
    })
    .catch(error => console.log('Error geting character list', error))
  }
  
  getOneRegister (id) {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      const singleCharacter = res.data
      console.log('Character ID', singleCharacter)
    })
    .catch(error => console.log('Error gettingn single character', error))
  }
  
  createOneRegister(obj) {
    axios
    .post(`${this.BASE_URL}/characters`, obj)
    .then(res => console.log('New Character: ', res.data))
    .catch(error => console.log('Error creating character', error))
  }
  
  updateOneRegister (id, update){
    axios
    .put(`${this.BASE_URL}/characters/${id}`, update)
    .then(res => console.log(res.data))
    .catch(error => console.log('Error editing character', error))
    
  }
  
  deleteOneRegister () {
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(res => console.log("Character has been successfully deleted", res.data))
    .catch(error => console.log('Error editing character', error))  
  }
}
