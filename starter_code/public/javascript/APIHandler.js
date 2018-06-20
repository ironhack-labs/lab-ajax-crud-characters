class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(this.BASE_URL +"/characters")
    .then(response =>{
      return response.data
      // console.log(response.data);
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL +`/characters/${id}`)
    .then(response =>{
      // console.log(response.data)
      return response.data;
    })

  }

  createOneRegister (char) {
    return axios.post(this.BASE_URL+`/characters`,char)
    .then(response =>{
      return response.data
    })
  }

  updateOneRegister (char) {
    return axios.put(this.BASE_URL+`/characters/${char.id}`,char)
    .then(response =>{
      return response.data
    })
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL +`/characters/${id}`)
    .then(response=>{
      console.log("I delete something")
    })
    
  }
}
