class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
//
  getFullList () {
    return axios.get(this.BASE_URL)
  }

  getOneRegister (id) {
    if(id==""){return new Promise((res,reject)=>reject("Se necesita in ID para Mostrar"))}
    return axios.get(this.BASE_URL+id)
  }

  createOneRegister (obj) {
    return axios.post(this.BASE_URL,obj)
  }

  updateOneRegister (id,obj) {
    console.log(id)
    if(id==""){return new Promise((res,reject)=>reject("Se necesita in ID para editar"))}
    return axios.put(this.BASE_URL+id,obj)
  }

  deleteOneRegister (id) {
    if(id==""){return new Promise((res,reject)=>reject("Se necesita in ID para borrar"))}
    return axios.delete(this.BASE_URL+id)
  }
}
