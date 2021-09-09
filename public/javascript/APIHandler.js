
class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({ baseURL: baseUrl });  }

  getFullList () {
  /*     GET, Route: "/characters"
  It receives NO parameters
  It returns the full characters list
  It returns JSON */
  }

  getOneRegister (id) {
  /*   Verb: GET, Route: "/characters/:id"
    It receives the character ID as a parameter (route)
    It returns the character with the indicated id
    It returns JSON  */
    return this.api.get(`/characters/${id}`)
  }

  createOneRegister (char) {
    this.api.post('/characters', char)
  }

  updateOneRegister (id, char) {
    this.api.put(`/characters/${id}`, char)

  }

  deleteOneRegister (id) {
    this.api.delete(`/characters/${id}`)
  }
}