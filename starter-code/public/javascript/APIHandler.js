class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosApp = axios.create({
      baseURL: 'https://minions-api.herokuapp.com/'
    })
  }

  getFullList() {

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
      })
  }
  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
