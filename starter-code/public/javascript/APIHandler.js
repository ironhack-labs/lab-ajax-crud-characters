class APIHandler {
  constructor(baseUrl, fetchOneName, fetchOneOccupation, fetchOneCartoon, fetchOneWeapon, fetchOneButton, searchCharId) {
    this.BASE_URL = 'https://minions-api.herokuapp.com'

    this.fetchOneName = fetchOneName
    this.fetchOneOccupation = fetchOneOccupation
    this.fetchOneCartoon = fetchOneCartoon
    this.fetchOneWeapon = fetchOneWeapon

    this.fetchOneButton = fetchOneButton
    this.searchCharId = searchCharId
  }

  getFullList() {
  }

  getOneRegister() {
    APIHandler.get(`/characters/${}`)
      .then(theChar => {

      })

  }

  createOneRegister() {

  }

  updateOneRegister() {

  }

  deleteOneRegister() {

  }
}
