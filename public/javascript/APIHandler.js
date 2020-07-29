class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApi = axios.create({
      baseURL: `http://localhost:8000`
    })
    
  }


  getFullList () {
    return this.axiosApi
    .get('/characters')
  }
  
  getOneRegister (id) {
  axios.get(`${this.BASE_URL}/characters/${id}`)
  console.log(id)
    
  }

  createOneRegister (newCharacter) {
    axios.post(`${this.BASE_URL}/characters`, newCharacter)
   
  }

  updateOneRegister (id, updateChar) {
    console.log(updateChar)
    axios.patch(`${this.BASE_URL}/characters/${id}`,updateChar)
    
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}
