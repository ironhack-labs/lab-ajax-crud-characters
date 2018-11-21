class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl + '/characters';
  }

  getFullList () {
    axios.get(this.BASE_URL)
      .then(characters => {
        console.log(characters);
      })
      .catch(e =>{
        console.log("Ojo",e)
      })
  }

  getOneRegister (id) {
    axios.get(`${this.BASE_URL}/?id=${id}`)
      .then(characters => {
      })
      .catch(e =>{
        console.log("Ojo",e) 
      })
  }

  createOneRegister (character) {
      axios.post(this.BASE_URL, character)
      .then(character => {
        console.log(character);
      })
      .catch(e =>{
        console.log("Ojo",e)

      })
  }

  updateOneRegister (id, object) {
    axios.put(`${this.BASE_URL}/${id}`,object)
    .then(character => {
      console.log(character);
    });
  }
  

  deleteOneRegister (id) {
    axios.delete(`${this.BASE_URL}/${id}`)
    .then(character => {
      console.log(character);
    })
    .catch(e =>{
      console.log("Ojo",e)

    })
  }
}
