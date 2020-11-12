const baseUrl = "http://localhost:8000/characters"
const oneChar = "http://localhost:8000/characters/:id"

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    const {data : characters} = axios.get(`${this.BASE_URL}/characters`)
    console.log (characters)
  }

  getOneRegister (id) {
    const {data : character} = axios.get(`${this.BASE_URL}/characters/${id}`)
    console.log (character)
  }

  createOneRegister (name,occupation,weapon,cartoon) {
    axios.post(`${this.BASE_URL}/characters/`, {name, occupation, weapon, cartoon})
  }

  updateOneRegister (id,name,occupation,weapon,cartoon) {
    axios.put(`${this.BASE_URL}/characters/${id}`, {name, occupation, weapon, cartoon})
  }

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}


