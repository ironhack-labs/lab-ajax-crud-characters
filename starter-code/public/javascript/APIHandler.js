class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

    getAllRegiter() {
      return axios
      .get(this.BASE_URL)
      .then(response => response.data)
      .catch(err => console.log(err))
      
    }

    getOneRegister(id) {
      const endpoint = `${this.BASE_URL}/${id}`
      return axios
      .get(endpoint)
      .then(response => response.data)
      .catch(err => console.log(err))
    }
    
    createOneRegister(data) {
      return axios
      .post(`${this.BASE_URL}`, data)
      .then(response => response.data)
      .catch(err => console.log(err))
  }
    updateOneRegister(data) {
      return axios
      .patch(`${this.BASE_URL}/${data.id}`, data)
      .then(response => response.data)
      .catch(err => console.log(err))
}
   deleteOneRegister(id) {
     return axios
     .delete(`${this.BASE_URL}/${id}`)
     .then(response => response.data)
     .catch(err => console.log(err))
   }
  }
  
