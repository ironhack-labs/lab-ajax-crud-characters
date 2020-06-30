class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({baseURL: baseUrl})
  }

  getFullList () {
    return this.axiosApp.get(`/characters`)
      .then(res => res.data.forEach(elm => newCardCharacter(elm)))
      .catch(console.log(err => console.log('Error al acceder a la BD: ', err)))
  }

  getOneRegister (id) {
    return this.axiosApp.get(`/characters/${id}`)
      .then(res => newCardCharacter(res.data))
      .catch(err => console.log('Error al acceder al ID: ', err))
  }

  createOneRegister (character) {
    return this.axiosApp.post('/characters', character)
      .then(res =>{
        document.querySelector('#new-character-form').reset()
        document.querySelector('#create-data').classList.toggle('btn-green')
      })
      .catch(err => {
        console.log('Error al crear el registro: ', err)
        document.querySelector('#create-data').classList.toggle('btn-green')
      })
  }

  updateOneRegister (newData, id) {
    return this.axiosApp.put(`/characters/${id}`, newData)
      .then(res => {
        document.querySelector('#edit-character-form').reset()
        document.querySelector('#update-data').classList.toggle('btn-green')
      })
      .catch(err => {
        console.log('Error al actualizar el registro: ', err)
        document.querySelector('#update-data').classList.toggle('btn-red')
      })
  }

  deleteOneRegister (id) {
    return this.axiosApp.delete(`/characters/${id}`)
      .then(res => document.querySelector('#delete-one').classList.toggle('btn-green'))
      .catch(err => {
        console.log('Error al eliminar el registro: ', err)
        document.querySelector('#delete-one').classList.toggle('btn-red')
      })
  }
}

function newCardCharacter(elm) {
  let newCard = document.getElementById('ch-info').cloneNode(true)
  newCard.classList.toggle('char-display')
        
  let clonedID = newCard.querySelector('.id')
  let clonedName = newCard.querySelector('.name')
  let clonedOccupation = newCard.querySelector('.occupation')
  let clonedIsCartoon = newCard.querySelector('.cartoon')
  let clonedWeapon = newCard.querySelector('.weapon')

  clonedID.innerHTML = `ID: ${elm.id}` 
  clonedName.innerHTML = `Character Name: ${elm.name}`
  clonedOccupation.innerHTML = `Character Occupation: ${elm.occupation}`
  clonedIsCartoon.innerHTML = `Is a Cartoon?: ${elm.cartoon}`
  clonedWeapon.innerHTML = `Character Weapon: ${elm.weapon}`

  document.querySelector('.characters-container').appendChild(newCard)
}