class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.name = document.getElementById('name')
    this.occupation = document.getElementById('occupation')
    this.weapon = document.getElementById('weapon')
    this.cartoon = document.getElementById('cartoon')
    this.charactersDiv = document.getElementById('characters')
  }

  getFullList() {
    axios.get(this.BASE_URL)
    .then(response => {
      response.data.forEach(element => {
        const listPoint = `<li>Personaje ${element.name} con ID ${element.id}, trabaja como ${element.occupation}, su arma es ${element.weapon} y es cartoon: ${element.cartoon}</li>`
        this.charactersDiv.innerHTML += listPoint
      });
    })
    .catch(error => console.log('¡ops! error:', error)) 
  }

  clearAll() {
    this.charactersDiv.innerHTML = ""
  }

  getOneRegister(searchCharacterID) {

    axios.get(`${this.BASE_URL}/${searchCharacterID}`)
    .then(response => {
      console.log(response.data)
        const { id, name, occupation, weapon, cartoon } = response.data
        this.name.innerHTML = name
        this.occupation.innerHTML = occupation
        this.weapon.innerHTML = weapon
        this.cartoon.innerHTML = cartoon
    })
    .catch(error => console.log('¡ops! error:', error))
  }

  createOneRegister(character) {
    axios.post(this.BASE_URL, character)
    .then(response => {
        const { id, name, occupation, weapon, cartoon } = response.data
        console.log("Created:", id, name, occupation, weapon, cartoon)
    })
    .catch(error => console.log('¡ops! error:', error))
  }

  updateOneRegister(updatedCharacter) {
    axios.put(`${this.BASE_URL}/${updatedCharacter.id}`, updatedCharacter)
        .then(response => {
            const { id, name, occupation, weapon, cartoon } = response.data
            console.log("Updated:", id, name, occupation, weapon, cartoon)
         })
        .catch(error => console.log('¡ops! error:', error))
  }

  deleteOneRegister(deleteCharacterID) {
    axios.delete(`${this.BASE_URL}/${deleteCharacterID}`)
    .then(response => {
        const { id, name, occupation, weapon, cartoon } = response.data
        console.log("Borrado:", id, name, occupation, weapon, cartoon)
     })
    .catch(error => console.log('¡ops! error:', error))
  }
}
