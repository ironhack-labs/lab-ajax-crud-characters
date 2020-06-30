class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
      .then(res => {
        const char = res.data
        console.log(`Character id:`, char)
      })
      .catch(error => console.log('Error getting character', error))

  }

  getOneRegister (id) {
    
    return axios.get(`${this.BASE_URL}/characters/${id}`)
    .then(res => {
      const char = res.data
      console.log(`Character id:`, char)
    })
    .catch(error => console.log('Error getting character', error))


  }

  createOneRegister (newCharacter) {

    console.log("inputs: ", newCharacter)

    return axios.post(`${this.BASE_URL}/characters`, newCharacter)
    .then(() => updateCharacters())
    .catch(err => console.log('Error creating new Char', err))
    
    
  }

  updateOneRegister () {

    const id = document.querySelector()
    const inputs = document.querySelectorAll('#edit-character-form input')

    const Character = {
      
      id: inputs[0].value,
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value,
      cartoon: inputs[4].checked,
    } 

    axios.put('characters/${id}')
  }

  deleteOneRegister () {

  }
}

