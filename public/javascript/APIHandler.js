
class APIHandler {
  constructor (baseUrl) {
    this.api = axios.create({ baseURL: baseUrl });  }

  getFullList () {
  /*     GET, Route: "/characters"
  It receives NO parameters
  It returns the full characters list
  It returns JSON */
  return this.api.get('/characters')
    .then((response) => {
    const allCharInfo = response.data;
    return allCharInfo
    }) 
  }

  getOneRegister (id) {
  /*   Verb: GET, Route: "/characters/:id"
    It receives the character ID as a parameter (route)
    It returns the character with the indicated id
    It returns JSON  */
    return this.api.get(`/characters/${id}`)
    .then((response) => {
    console.log(response);
    return ("ok")
    //const oneCharInfo = response.data;
    //return oneCharInfo
    }) 
  }

  createOneRegister (character) {
    character => this.api.post(`/characters`, character)
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}