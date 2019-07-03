class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get(this.BASE_URL += "/characters")
    .then(list => {
      console.log(list.data)
      return list.data
    })
    .catch(err =>{
      console.log(err)
    })
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL += `/characters/${id}`)
    .then(character => {
      return character.data
    })
    .catch(err => {
      console.log(err)
    })
  }

  createOneRegister (valor) {
    axios.post(this.BASE_URL += `/characters/`, valor)
  }

  updateOneRegister (id, valor) {
    axios.post(this.BASE_URL += `/characters/`, valor)
  }

  deleteOneRegister () {

  }
}
