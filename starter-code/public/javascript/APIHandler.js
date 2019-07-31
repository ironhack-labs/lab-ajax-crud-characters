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
    const theCartoon = document.getElementById('is-cartoon').value
    const theWeapon = document.getElementsByClassName("the-weapon")[0].value


    const charsModel = {
      name: theName,
      occupation: theOccupation,
      weapon: theWeapon,
      cartoon: theCartoon
    }
    console.log(charsModel)
    this.minions.post("characters", charsModel)





    //   const characterToCreate = {
    //     name: theName[0].value,
    //     occupation: theOccupation[0].value,
    //     weapon: theWeapon[0].value
    // }

    // charactersApp.post('/', characterToCreate)
    //     .then(response => {
    //         const { id, name, occupation } = response.data
    //         const characterLi = `<li><strong>Personaje creado</strong><br>Nombre: ${name} (id ${id}), ocupación: ${occupation}`
    //         document.getElementById('characters-list').innerHTML += characterLi

    //         document.getElementById("character-form").reset()
    //         updateAllCharacters()
    //     })
    //     .catch(err => console.log(err))


  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
