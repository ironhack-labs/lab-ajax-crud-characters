class APIHandler {
  constructor(baseUrl) {
    this.minionApi = axios.create(
      {
        baseURL: baseUrl
      }
    )
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)     //-----------

  }

  getOneRegister () {
    return axios.get(`${this.BASE_URL}/characters/${id}`)          //-------------
  }

  createOneRegister () {  
    return axios.post(`${this.BASE_URL}/characters`, character)           //------------

  }

  updateOneRegister () {
    return axios.put(`${this.BASE_URL}/characters/${id}`, character)            //-----------

  }

  deleteOneRegister () {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)            //-----------

  }
}
