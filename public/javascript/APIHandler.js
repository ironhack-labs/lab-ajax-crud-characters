class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios.get('http://localhost:8000/characters')
      .then(chars => displayCharacters(chars.data))
      .catch(err => console.log(err))
  }

  getOneRegister (id) {
    axios.get(`http://localhost:8000/characters/${id}`)
      .then(oneChar => displayCharacters([oneChar.data]))
      .catch(err => console.log(err))
  }

  createOneRegister (newCharacter) {
    const createButton = document.getElementById('create-data')
    axios.post(`http://localhost:8000/characters`, newCharacter) 
      .then(newChar => changeColor('green', createButton))
      .catch(e => changeColor('red', createButton));
  }

  updateOneRegister (character) {
    const updateButton = document.getElementById('send-data')
    axios.patch(`http://localhost:8000/characters/${character.id}`, character)
      .then(updateChar => changeColor('green', updateButton))
      .catch(err => changeColor('red', updateButton))

  }

  deleteOneRegister (id) {
    const deleteButton = document.getElementById('delete-one')
    axios.delete(`http://localhost:8000/characters/${id}`)
      .then(() => changeColor('green', deleteButton))
      .catch(err => changeColor('red', deleteButton))
    
  }
}
