class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}`)
    .then(res => {
      return res.data;
    })
  }

  getOneRegister (id) {
    return axios.get(`${this.BASE_URL}/${id}`)
    .then(res => {
      return res.data;
    })  
  }

  createOneRegister (newChar) {
    return axios.post(`${this.BASE_URL}`, newChar)
    //.then(res => {
    //  return res.data.push(newChar);
    //}) 
  }

  updateOneRegister () {
    return axios.put(`${this.BASE_URL}/${id}`)
    .then(res => {
      return res.data;
    })   
  }

  deleteOneRegister () {
    return axios.delete(`${this.BASE_URL}/${id}`)
    .then(res => {
      return res.data;
    }) 
  }
}
