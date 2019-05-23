
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {


 return axios.get(`${this.BASE_URL}/characters`)
      .then(responseFromAPI => {

          console.log('Response from API is: ', responseFromAPI.data)
          
          return responseFromAPI.data
      })
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
            .then( responseFromAPI => {
              console.log(`${this.BASE_URL}/characters/${id}`)
              console.log(responseFromAPI.data)
              return responseFromAPI.data
            })
  }

  createOneRegister (character) {
    return axios.post(`${this.BASE_URL}/characters`, character)
              .then( responseFromAPI => responseFromAPI.data)
  }

  updateOneRegister (id, character) {

    return axios.put(`${this.BASE_URL}/characters/${id}`, character)
    .then( responseFromAPI => {
      return responseFromAPI.data
    })
    
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`, id)
    .then( responseFromAPI => {
      return responseFromAPI.data
    })
    
    
  }
}
