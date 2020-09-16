class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
      .get('http://localhost:8000/characters')
      .then(response => {
        console.log('Response form the API: ', response)
        // const data = response.data
      })
      .catch(err => err)
  }

  getOneRegister () {
    axios
      .get('http://localhost:8000/characters/:id')
      .then(response = > {
        console.log(response)
      })
      .catch(err => err)
  }

  createOneRegister () {
    const newCharacterInfo = { name, occupation, weapon, cartoon }

    axios
      .post('http://localhost:8000/characters', newCharacterInfo)
      .then(response => {
        console.log(response)
      })
      .catch(err => err)

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
