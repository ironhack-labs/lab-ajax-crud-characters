class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    console.log("Listado de personajes")
    return axios.get(`${this.BASE_URL}/characters`)
      .then(data => {
        return data.data
      })
  }

  getOneRegister(id) {
    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(data => {
        return data.data
      })
  }

  createOneRegister(info) {
    return axios.post(`${this.BASE_URL}/characters`, info)
      .then(data => {
        return data.data
      })
      .catch(err=>{
        return "no se ahora mismo como devolver si hubo un error como pide el ejercicio"
      })
  }

  updateOneRegister(id, info) {
    return axios.put(`${this.BASE_URL}/characters/${id}`, info)
      .then(data => {
        return data.data
      })
      .catch(err=>{
        return "Character not found"
      })

  }

  deleteOneRegister(id) {
return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(data => {
      return "Character has been successfully deleted"
    })
    .catch(err=>{
      return "Character not found"
    })
  }
}