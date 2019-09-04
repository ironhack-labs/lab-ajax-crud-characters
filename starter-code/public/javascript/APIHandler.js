class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
return axios.
get('http://localhost:8000/characters')
  }

  getOneRegister (id) {
return axios.
get(`http://localhost:8000/characters/${id}`)
  }

  createOneRegister (chars) {
    return axios.post('http://localhost:8000/characters', chars)
   

  }

  updateOneRegister (id,newValue) {
    return axios.patch(`http://localhost:8000/characters/${id}`, newValue)

  }

  deleteOneRegister (id) {
    return axios.delete(
      `http://localhost:8000/characters/${id}`
    )

  }
}
