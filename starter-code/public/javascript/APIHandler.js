class APIHandler {
  // const baseUrl ='http://localhost:8000/'
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = async()  => {
    return axios.get(`${this.BASE_URL}/characters`)
  }
  getOneRegister = async (id) => {
    return axios.get(`${this.BASE_URL}/characters/${id}`)  
  }
  createOneRegister = async (character) => {
    axios.post(`${this.BASE_URL}/characters`, character)
    .then(console.log('workssssss'))
    .catch((err) => {
      console.log(err)
    })
  }

  updateOneRegister = async (id, character) => {
    axios.patch(`${this.BASE_URL}/characters/${id}`, character)
      .then(console.log('workssssss'))
      .catch((err) => {
        console.log(err)
      })
  }

  deleteOneRegister = async (id) => {
    return axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      console.log("Character has been successfully deleted")
      })
      .catch((err) => {
  console.log("Character not found. " + err)})
  
}
}
