class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  async getFullList () {

    let data;
    
    await axios.get(this.BASE_URL)
    .then(res => {
      data = res.data;
    })
    .catch(error => {
      console.log(error)
    })

    return data;
  }

  async getOneRegister (id) {

    let data;
    
    await axios.get(`${this.BASE_URL}/${id}`)
    .then(res => {
      data = res.data;
    })
    .catch(error => {
      console.log(error)
    })

    return data;
  }

  async createOneRegister (newChar) {
      await axios.post(`${this.BASE_URL}`, newChar)
  }

  async updateOneRegister (charInfo) {
    await axios.put(`${this.BASE_URL}/${charInfo.id}`, charInfo)  
  }

  deleteOneRegister (id) {    
    axios.delete(`${this.BASE_URL}/${id}`)
    .then(res => {})
    .catch(err => {})

  }
}
