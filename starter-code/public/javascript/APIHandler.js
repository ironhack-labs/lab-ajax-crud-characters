class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList () {
    return axios.get("http://localhost:8000/characters/")

  }

  getOneRegister (Id) {
    console.log(Id);
    return axios.get("http://localhost:8000/characters/" + Id)
  }

  createOneRegister () {
return axios.post("http://localhost:8000/characters")
  }

  updateOneRegister () {
    return axios.patch("http://localhost:8000/characters/${Id}")
  }

  deleteOneRegister (Id) {
    return axios.delete("http://localhost:8000/characters/"  + Id)
  }
}
