const drawCard = (character) => {
  const {id, name, occupation, cartoon, weapon} = character
  const element = document.querySelector(`.characters-container`)
  element.innerHTML += `<div>
  <p><b>Id:</b> ${id}<p>
  <p><b>Name:</b> ${name}<p>
  <p><b>Occupation:</b> ${occupation}<p>
  <p><b>Is a Cartoon?:</b> ${cartoon}<p>
  <p><b>Weapon:</b> ${weapon}<p>
  </div>
  `
  const elementDelete = document.querySelector(`.character-info`)
  elementDelete.classList.add("hide")
}

const drawCards = (items) => {
  items.forEach(element => {
    drawCard(element)
  });
}


// const charName = document.querySelector('.name')
// const charOccupation = document.querySelector('.occupation')
// const charCartoon = document.querySelector('.cartoon')
// const charWeapon = document.querySelector('.weapon')

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    axios
      .get(`${this.BASE_URL}/characters`)
      .then((response) => {
        const characters = response.data
        //console.log (characters)
        drawCards(characters)
      })
      .catch((e) => console.log (e))
  }

  getOneRegister () {
    let inputOne = document.getElementById('inputOne').value
    let id = inputOne
    //console.log(id)
    axios
      .get(`${this.BASE_URL}/characters/${id}`)
      .then((response) => {
        const character = response.data
        drawCard(character)           
      })
      .catch((e) => console.log(e))
  }
  
  createOneRegister (character) {
    let name = document.getElementById('nameNewCharacter').value
    //console.log(name)
    let occupation = document.getElementById('occupationNewCharacter').value
    //console.log(occupation)
    let cartoon = document.getElementById('cartoonNewCharacter').checked
    //console.log(cartoon)
    let weapon = document.getElementById('weaponNewCharacter').value
    //console.log(weapon)
    character = {
      name,
      occupation,
      cartoon,
      weapon
    }     
    axios
      .post(`${this.BASE_URL}/characters`, character)
      .then((response) => {
        //console.log(response.data)
        const button = document.getElementById('send-data')
        button.classList.add('background-Green')
      })
      .catch((e) => {
        console.log(e)
        const button = document.getElementById('send-data')
        button.classList.add('background-Red')
      })
  }

  updateOneRegister (data, id) {
    axios
      .put(`${this.BASE_URL}/characters/${id}`, data)
      .then((response) => {
      console.log(response.data)
      })
      .catch((e) => console.log(e))
  }

  deleteOneRegister () {
    let inputDelete = document.getElementById('inputDelete').value
    let id = inputDelete
    axios
      .delete(`${this.BASE_URL}/characters/${id}`)
      .then(() => {
        const button = document.getElementById('delete-one')
        button.classList.add('background-Green')
      })
      .catch((e) => {
        console.log(e)
        const button = document.getElementById('delete-one')
        button.classList.add('background-Red')
      })
  }
}


