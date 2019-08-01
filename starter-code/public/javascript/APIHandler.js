class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = 'https://minions-api.herokuapp.com/'
    this.minions = axios.create({
      baseURL: this.BASE_URL
    })

    // const fetchOneButton = document.getElementById('fetch-one')
    // const searchCharId = document.getElementById('char-id').value

    // const theName = document.getElementsByClassName("the-name")
    // const theOccupation = document.getElementsByClassName("the-occupation")
    // const theWeapon = document.getElementsByClassName("the-weapon")

    // const editCharId = document.getElementById('edit-char-id').value

  }

  getFullList() {
    this.minions.get("characters")
      .then(response => {

        response.data.forEach(minion => {
          document.getElementsByClassName('name-p')[0].innerHTML += `${minion.name}<br>`
          document.getElementsByClassName('occupation-p')[0].innerHTML += `${minion.occupation}<br>`
          document.getElementsByClassName('cartoon-p')[0].innerHTML += `${minion.cartoon}<br>`
          document.getElementsByClassName('weapon-p')[0].innerHTML += `${minion.weapon}<br>`
        })
      })
  }

  getOneRegister() {
    const searchCharId = document.getElementById('char-id').value
    this.minions.get(`characters/${searchCharId}`)
      .then(response => {
        document.getElementsByClassName('name-p')[0].innerHTML = response.data.name
        document.getElementsByClassName('occupation-p')[0].innerHTML = response.data.occupation
        document.getElementsByClassName('cartoon-p')[0].innerHTML = response.data.cartoon
        document.getElementsByClassName('weapon-p')[0].innerHTML = response.data.weapon

      })
  }

  createOneRegister() {
    const theName = document.getElementsByClassName("the-name")[0].value
    const theOccupation = document.getElementsByClassName("the-occupation")[0].value
    const theCartoon = document.getElementById('is-cartoon').checked
    const theWeapon = document.getElementsByClassName("the-weapon")[0].value


    const charsModel = {
      name: theName,
      occupation: theOccupation,
      weapon: theWeapon,
      cartoon: theCartoon
    }

    this.minions.post("characters", charsModel)

  }

  updateOneRegister() {
    const editCharId = document.getElementById('edit-char-id').value

    const theNameEdit = document.getElementsByClassName("the-name")[1].value
    const theOccupationEdit = document.getElementsByClassName("the-occupation")[1].value
    const theCartoonEdit = document.getElementById('is-cartoon').checked
    const theWeaponEdit = document.getElementsByClassName("the-weapon")[1].value

    const charsEditModel = {
      name: theNameEdit,
      occupation: theOccupationEdit,
      weapon: theWeaponEdit,
      cartoon: theCartoonEdit
    }
    console.log(charsEditModel)
    this.minions.put(`characters/${editCharId}`, charsEditModel)

  }

  deleteOneRegister() {

  }
}
