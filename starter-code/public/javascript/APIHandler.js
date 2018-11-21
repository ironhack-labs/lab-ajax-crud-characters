class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
   
    return axios.get(`${this.BASE_URL}/characters`)
      .then(characters=>{
         return characters.data;
      })
      .catch(err=>console.log(err))

  }

  getOneRegister (id) {
 
    

    return axios.get(`${this.BASE_URL}/characters/${id}`)
      .then(characters=>{
         return characters.data;
      })
      .catch(err=>console.log(err))

  }

  createOneRegister (object) {

    return axios.post(`${this.BASE_URL}/characters`,object)
    .then(data=>{
      return data;
    })
    .catch(err=>console.log(err))
  }


  updateOneRegister (id,object) {

    return axios.put(`${this.BASE_URL}/characters/${id}`,object)
    .then(()=>{
      
    })
    .catch(err=>console.log(err))
  }

  deleteOneRegister (id) {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(()=>{
      
    })
    .catch(err=>console.log(err))
  }
}
