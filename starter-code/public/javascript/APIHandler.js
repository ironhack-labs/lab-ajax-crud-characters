class APIHandler {
    constructor(baseUrl){
    this.BASE_URL = baseUrl;
  }


  //Fetch ALL--------------------------------------------------------
  getFullList() {
    axios.get(`${this.BASE_URL}/characters`).then(characters => {

      console.log(characters.data)
      return characters.data

    })
      .catch(error => {
        console.log('ERRRORRRR', error)
      })
  }



  //Fetch by ID--------------------------------------------------------
  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`).then(characters => {
      document.querySelector('.name').innerHTML = `${characters.data.name}`
      document.querySelector('.occupation').innerHTML = `${characters.data.occupation}`
      document.querySelector('.weapon').innerHTML = `${characters.data.weapon}`
      document.querySelector('.cartoon').innerHTML = `Cartoon: ${characters.data.cartoon}`
    })
      .catch(error => {
        console.log('ERRRORRRR', error)
      })
  }




  //Create a character--------------------------------------------------------
  createOneRegister(all) {
    axios.post(`${this.BASE_URL}/characters`, all)
      .then(characters => {
        console.log(characters.data)
        return characters.data
      })
      .catch(error => {
        console.log('ERRRORRRR', error)
      })
  }



  //Edit a character--------------------------------------------------------
  updateOneRegister(id, all) {
    axios.path(`${this.BASE_URL}/characters/${id}`, all).then().catch(err => console.error(err))
  }


  //Delete a character--------------------------------------------------------
  deleteOneRegister(id) {
    axios.delete(`${this.BASE_URL}/characters/${id}`)
  }
}