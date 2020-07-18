class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get('http://localhost:8000/characters')
      .then(chars => console.log(chars.data))
      .catch(err => console.log(err))
  }

  getOneRegister (id) {
    axios.get(`http://localhost:8000/characters/${id}`)
      .then(oneChar => console.log(oneChar.data))
      .catch(err => console.log(err))
  }

  createOneRegister (newCharacter) {
    axios.post(`http://localhost:8000/characters`, newCharacter) 
      .then(newChar => console.log(newChar.data))
      .catch(e => console.error(e));
  }

  updateOneRegister (character) {
    axios.patch(`http://localhost:8000/characters/${character.id}`, character)
      .then(updateChar => console.log(updateChar.data))
      .catch(err => console.log(err))

  }

  deleteOneRegister (id) {
    axios.delete(`http://localhost:8000/characters/${id}`)
      .then(() => console.log('Deleted'))
      .catch(err => console.log(err))
    
  }
}
