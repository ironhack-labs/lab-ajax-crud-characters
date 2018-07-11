
class APIHandler {

  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get("http://localhost:8000/characters").then(res => {
      return res;
    })
  }

  getOneRegister (id) {
    return axios.get(`http://localhost:8000/characters/${id}`).then(res => {
      return res
    })
  }

  createOneRegister (character) {
   return axios.post("http://localhost:8000/characters", character).then(res => {
     return res;
   });
  }

  updateOneRegister (id,change) {
    return axios.patch(`http://localhost:8000/characters/${id}`,change).then(res => {
      return res;
    })
  }

  deleteOneRegister (id) {
    return axios.delete(`http://localhost:8000/characters/${id}`);
  }
}
