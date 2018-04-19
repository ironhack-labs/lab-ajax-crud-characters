class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`http://localhost:8000/characters`)
    .then(res => {res.data})
    .catch(e => console.log(e));
  }
  getOneRegister (id) {
    return axios.get(`http://localhost:8000/characters/${id}`)
    .then(res =>{ res.data })
    .catch(e => console.log(e));
  }
  createOneRegister (newData) {
    return axios.post(`http://localhost:8000/characters`,{newData})
      .then(res => { res.data })
      .catch(e => console.log(e));
  }

  updateOneRegister (id, update) {
    return axios.patch(`http://localhost:8000/characters/${id}`,{update})
      .then(res => { res.data })
      .catch(e => console.log(e));
  }

  deleteOneRegister (id) {
    return axios.delete(`http://localhost:8000/characters/${id}`)
    .then(res=>{console.log("funciona")})
    
  }
}
