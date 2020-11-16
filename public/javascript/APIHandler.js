
class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList = () => {
    axios
    .get(`${this.BASE_URL}/characters`)
    .then(response => {
      const charsArr = response.data
      const divCharCol = document.getElementsByClassName('characters-container')
      const divCharArr = [...divCharCol]
      const divChar = divCharArr[0]

      charsArr.forEach(char => {
        const divInfo = document.createElement('div')
        divInfo.classList.add('character-info')
        const divId = document.createElement('div')
        const divName = document.createElement('div')
        const divOccupation = document.createElement('div')
        const divCartoon = document.createElement('div')
        const divWeapon = document.createElement('div')
        divId.classList.add('id')
        divName.classList.add('name')
        divOccupation.classList.add('occupation')
        divCartoon.classList.add('cartoon')
        divWeapon.classList.add('weapon')
        divId.innerHTML = `Id: <span>${char.id}</span>`
        divName.innerHTML = `Name: <span>${char.name}</span>`
        divOccupation.innerHTML = `Occupation: <span>${char.occupation}</span>`
        divCartoon.innerHTML = `Is a Cartoon?: <span>${char.cartoon}</span>`
        divWeapon.innerHTML = `Weapon: <span>${char.weapon}</span>`
        divInfo.appendChild(divId)
        divInfo.appendChild(divName)
        divInfo.appendChild(divOccupation)
        divInfo.appendChild(divCartoon)
        divInfo.appendChild(divWeapon)
        divChar.appendChild(divInfo)
      })
      
    })
    .catch(err=> console.error(err))
  }

  getOneRegister = (id) => {
    axios
    .get(`${this.BASE_URL}/characters/${id}`)
    .then(response => {
      const char = response.data
      const divCharCol = document.getElementsByClassName('characters-container')
      const divCharArr = [...divCharCol]
      const divChar = divCharArr[0]
      divChar.innerHTML = 
      `
      <div class="character-info">
        <div class="id">Id: <span>${char.id}</span></div>
        <div class="name">Name: <span>${char.name}</span></div>
        <div class="occupation">Occupation: <span>${char.occupation}</span></div>
        <div class="cartoon">Is a Cartoon?: <span>${char.cartoon}</span></div>
        <div class="weapon">Weapon: <span>${char.weapon}</span></div>
      </div>`

    })
    .catch(err => console.error(err))
  }

  createOneRegister = (data) => {
    const newButton = document.getElementById('send-new-data')
    axios
    .get(`${this.BASE_URL}/characters`)
      .then(response => {
        const charsArr = response.data
        const lastId = charsArr[charsArr.length-1].id
        const newId = lastId + 1

        axios
        .post(`${this.BASE_URL}/characters`, {...data, id: newId})
        .then(result => {
          newButton.classList.add('active')
        })

      })
    .catch(err => {
      newButton.classList.add('error')
      console.error(err)
    })

  }

  updateOneRegister = (id, data) => {
    const editButton = document.getElementById('send-edit-data')
    axios
    .put(`${this.BASE_URL}/characters/${id}`, data)
    .then(result => {
      editButton.classList.add('active')
    })
    .catch(err => {
      editButton.classList.add('error')
      console.error(err)})

  }

  deleteOneRegister = (id) => {
    const delButton = document.getElementById('delete-one')
    axios
    .delete(`${this.BASE_URL}/characters/${id}`)
    .then(result => {
      delButton.classList.add('active')
    })
    .catch(err => {
      delButton.classList.add('error')
      console.error(err)
    })
  }
}