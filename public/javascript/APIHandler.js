
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;

    const axiosApp = axios.create({
      baseURL: baseUrl
    })
    this.axios = axiosApp
  }

  //MOSTRAR TODOS LOS REGISTROS ---OK---

  getFullList() {
    
    return this.axios
      .get('/characters')
      
  }

  //MOSTRAR REGISTRO POR ID ---OK---

  getOneRegister(id) {
    
     return this.axios
      .get(`/characters/${id}`)
      
  }

  //CREAR UN REGISTRO ---OK---

  createOneRegister (character) {

    return this.axios
      .post('/characters', character)
      
  
  }

  //EDITAR UN REGISTRO ---OK---

  updateOneRegister(id, newUpdate) {

    return this.axios  
    .put(`/characters/${id}`, newUpdate)

  }

  //ELIMINAR REGISTRO POR ID

  deleteOneRegister(id) {
    
    return this.axios
    .delete(`/characters/${id}`)

  }

  
}
