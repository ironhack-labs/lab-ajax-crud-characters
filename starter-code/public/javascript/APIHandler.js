class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    this.$showContainer = document.querySelector('#show-container div')
    this.getOneIdInput = document.querySelector('#fetch-one-input')

  }

  getFullList  = async (e) => {
    e.preventDefault()
    let {data} = await axios.get('http://localhost:8000/characters')
    this.$showContainer.innerHTML = ''
    data.forEach(char => {
  
      let idP = document.createElement('p')
      let nameP = document.createElement('p')
      let occupationP = document.createElement('p')
      let cartoonP = document.createElement('p')
      let weaponP = document.createElement('p')
      const br = document.createElement('br')
      const div = document.createElement('div')

      idP.innerText = `Id:  ${char.id}`
      nameP.innerText = `Name:   ${char.name}`
      occupationP.innerText = `Occupation:   ${char.occupation}`
      cartoonP.innerText = `Is a cartoon:   ${char.cartoon}`
      weaponP.innerText = `Weapon:  ${char.weapon}`

      div.className = 'card'
      this.$showContainer.appendChild(div)
      div.appendChild(idP)
      div.appendChild(nameP)
      div.appendChild(occupationP)
      div.appendChild(cartoonP)
      div.appendChild(weaponP)
    })
  }

  getOneRegister = async (e) => {
    e.preventDefault()
    let getOneIdInput = document.querySelector('#fetch-one-input').value
    let char = await axios.get(`http://localhost:8000/characters/${getOneIdInput}`)
    this.$showContainer.innerHTML = ''


    let idP = document.createElement('p')
    let nameP = document.createElement('p')
    let occupationP = document.createElement('p')
    let cartoonP = document.createElement('p')
    let weaponP = document.createElement('p')
    const br = document.createElement('br')
    const div = document.createElement('div')

    idP.innerText = `Id:  ${char.data.id}`
    nameP.innerText = `Name:  ${char.data.name}`
    occupationP.innerText = `Occupation:   ${char.data.occupation}`
    cartoonP.innerText = `Is a cartoon:   ${char.data.cartoon}`
    weaponP.innerText = `Weapon:  ${char.data.weapon}`

    div.className = 'card'
    this.$showContainer.appendChild(div)
    div.appendChild(idP)
    div.appendChild(nameP)
    div.appendChild(occupationP)
    div.appendChild(cartoonP)
    div.appendChild(weaponP)
  }

  createOneRegister = async (e) => {
    e.preventDefault()
    const nameInput = document.querySelector('#new-character-form div:first-of-type input').value
    const ocupInput = document.querySelector('#new-character-form div:nth-child(2) input').value
    const weaponInput = document.querySelector('#new-character-form div:nth-child(3) input').value
    const cartoonInput = document.querySelector('#new-character-form div:nth-child(4) input').checked
    await axios.post('http://localhost:8000/characters', {name: nameInput, occupation: ocupInput, weapon: weaponInput, cartoon: cartoonInput})
    alert('Se ha creado el personaje')
    this.getFullList(e)
  }

  updateOneRegister = async (e) => {
    e.preventDefault()
    const idInput = document.querySelector('#edit-character-form div:nth-child(1) input').value
    const nameInput = document.querySelector('#edit-character-form div:nth-child(2) input').value
    const ocupInput = document.querySelector('#edit-character-form div:nth-child(3) input').value
    const weaponInput = document.querySelector('#edit-character-form div:nth-child(4) input').value
    const cartoonInput = document.querySelector('#edit-character-form div:nth-child(5) input').checked
    const resp = await axios.put(`http://localhost:8000/characters/${idInput}`, {name: nameInput, occupation: ocupInput, weapon: weaponInput, cartoon: cartoonInput})
    alert('Se edito el personaje')
    this.getFullList(e)
  }

  deleteOneRegister = async (e) => {
    e.preventDefault()
    const $button = document.querySelector('#delete-one')
    let deleteInput = document.querySelector('.delete input').value
    await axios.delete(`http://localhost:8000/characters/${deleteInput}`)
    $button.style = 'background: green;'
    alert(`Se borro el personaje con id ${deleteIdInput}`)
    this.getFullList(e)
  }
}
