class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/'
    })
  }

  getFullList() {
    this.axiosApp.get('characters')
      .then(response => {
        // console.log(response.data)
        const characterArr = response.data

        characterArr.forEach(character => {
          const details = `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
          document.querySelector('.characters-container').innerHTML += details
        })
      })
      .catch(error => console.log('Oh No! Error is: ', error))
  }

  getOneRegister() {
    let idValue = document.querySelector('#character-id').value

    this.axiosApp.get(`characters/${idValue}`)
      .then(response => {
        document.querySelector('#updId').value = response.data.id
        document.querySelector('#updName').value = response.data.name
        document.querySelector('#updOccupation').value = response.data.occupation
        document.querySelector('#updWeapon').value = response.data.weapon
        document.querySelector('#updCartoon').checked = response.data.cartoon
        document.querySelector('#fetch-one').style.background = 'green'


        console.log(response)
        let character = response.data

        const details = `<div class="character-info">
        <div class="name">Character Name: ${character.name}</div>
        <div class="occupation">Character Occupation: ${character.occupation}</div>
        <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
        <div class="weapon">Character Weapon: ${character.weapon}</div>
      </div>`
        document.querySelector('.characters-container').innerHTML += details
      })
      .catch(error => {
        document.querySelector('#fetch-one').style.background = 'red'
        document.querySelector('.characters-container').innerHTML = '<p>Fallo al mostrar caracter</p>'
        console.log('Oh No! Error is: ', error)
      })
  }

  createOneRegister() {
    let newName = document.querySelector('#newName').value
    let newOccupation = document.querySelector('#newOccupation').value
    let newWeapon = document.querySelector('#newWeapon').value
    let newCartoon = document.querySelector('#newCartoon').checked

    // console.log(newCartoon)

    let newObj = {
      name: newName,
      occupation: newOccupation,
      cartoon: newCartoon,
      weapon: newWeapon
    }
    console.log(newObj)
    this.axiosApp.post(`characters`, newObj)
      .then(response => {
        console.log(response)
        document.querySelector('#send-data-create').style.background = 'green'
      })
      .catch(error => {
        document.querySelector('.characters-container').innerHTML = '<p>Fallo al crear caracter</p>'
        document.querySelector('#send-data-create').style.background = 'red'
        console.log('Oh No! Error is: ', error)
      })
  }

  updateOneRegister() {
    let updId = document.querySelector('#updId').value
    let updName = document.querySelector('#updName').value
    let updOccupation = document.querySelector('#updOccupation').value
    let updWeapon = document.querySelector('#updWeapon').value
    let updCartoon = document.querySelector('#updCartoon').checked

    let updObj = {
      id: updId,
      name: updName,
      occupation: updOccupation,
      cartoon: updCartoon,
      weapon: updWeapon
    }
    console.log(updObj)
    this.axiosApp.put(`characters/${updId}`, updObj)
      .then(response => {
        document.querySelector('#send-data-update').style.background = 'green'
        console.log(response)
      })
      .catch(error => {
        document.querySelector('.characters-container').innerHTML = '<p>Fallo al editar caracter</p>'
        document.querySelector('#send-data-update').style.background = 'red'
        console.log('Oh No! Error is: ', error)
      })
  }

  deleteOneRegister() {
    let idValue = document.querySelector('#character-id-delete').value
    this.axiosApp.delete(`characters/${idValue}`)
      .then(response => {
        console.log(response)
        document.querySelector('#delete-one').style.background = 'green'
        response.data == null ? document.querySelector('#delete-one').style.background = 'red' : null
      })
      .catch(error => {
        document.querySelector('#delete-one').style.background = 'red'
        document.querySelector('.characters-container').innerHTML = '<p>Fallo al eliminar caracter</p>'
        console.log('Oh No! Error is: ', error)
      })
  }

}