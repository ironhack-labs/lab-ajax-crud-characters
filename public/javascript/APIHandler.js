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

  getOneRegister (id) {
    axios
      .get(`${this.BASE_URL} / characters/ ${id}`)
      .then((response) => {
      console.log(response.data)
      })
      .catch((e) => showPopup(e))
  }
  
  createOneRegister (data) {
    axios
      .post(`${this.BASE_URL} / characters`, data)
      .then((response) => {
      console.log(response.data)
      })
      .catch((e) => showPopup(e))
  }

  updateOneRegister (data, id) {
    axios
      .put(`${this.BASE_URL} / characters/ ${id}`, data)
      .then((response) => {
      console.log(response.data)
      })
      .catch((e) => showPopup(e))
  }

  deleteOneRegister (id) {
    axios
      .delete(`${this.BASE_URL} / characters/ ${id}`)
      .then((response) => {
      console.log(response.data)
      })
      .catch((e) => showPopup(e))
  }
}

// const api = new APIHandler(`http: // localhost: 8000`)
// console.log (api.getOneRegister(1))
