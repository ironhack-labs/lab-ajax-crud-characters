class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
  

  getFullList () {
    return axios.get(`${this.BASE_URL}/characters`)
    .then(response => response.data)
  }

  getOneRegister () {
    const characterId = document.getElementById('character-id').value
    return axios.get(`${this.BASE_URL}/characters/${characterId}`)
    .then(response => {
      const { id, name, occupation, weapon } = response.data
      createContainer(response.data)
    })

  }

createOneRegister () {
  const newCharacterInputs = document.querySelectorAll('#new-character-form input')

  const character = {
      name: newCharacterInputs[0].value,
      occupation: newCharacterInputs[1].value,
      weapon: newCharacterInputs[2].value,
      cartoon: newCharacterInputs[3].checked,
  }

  console.log("esponse")
  axios.post(`${this.BASE_URL}/characters/`, character)
    .then(response => {
        const { id, name, occupation, weapon } = response.data
        createContainer(response.data)
    })
    .catch(error => console.log('¡ops! error:', error))
}

updateOneRegister () {
  const updateCharacterInputs = document.querySelectorAll('#edit-character-form input')
  console.log(updateCharacterInputs)
  const character = {
    id: updateCharacterInputs[0].value,
    name: updateCharacterInputs[1].value,
    occupation: updateCharacterInputs[2].value,
    weapon: updateCharacterInputs[3].value,
    cartoon: updateCharacterInputs[4].checked,
}
    axios.put(`${this.BASE_URL}/characters/${character.id}`,character)
    .then(response => {
      const { id, name, occupation, weapon } = response.data
      createContainer(response.data)
  })

}

deleteOneRegister () {

  const deleteCharacterId = document.getElementById('delete').value
  console.log(deleteCharacterId)
  return axios.delete(`${this.BASE_URL}/characters/${deleteCharacterId}` )
  .then(response => {
    const { id, name, occupation, weapon } = response.data
    createContainer(response.data)
  })

}

  }

  

