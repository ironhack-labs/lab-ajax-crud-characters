class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
    this.api = axios.create({
      baseURL: this.BASE_URL
    })
  }
  
  getFullList() {
    return this.api.get(`/characters`)
  }

  getOneRegister(id) {
    return this.api.get(`/characters/${id}`)
  }

  createOneRegister(character) {
    return this.api.post(`/characters`, character)
  }

  updateOneRegister(id, updatedInfo) {
    return this.api.put(`/characters/${id}`, updatedInfo)
  }

  deleteOneRegister(id) {
    return this.api.delete(`/characters/${id}`)
  }
}

/* 
Get all the characters info from http://localhost:8000/characters
Get a single character info from http://localhost:8000/characters/:id
Create a single character posting the data to http://localhost:8000/characters
Delete a single character through his id in http://localhost:8000/characters/:id
Edit a single character through his id in http://localhost:8000/characters/:id 
*/