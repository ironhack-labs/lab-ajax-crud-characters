class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


  getFullList () {
      return $.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
      return $.get(`${this.BASE_URL}/characters/`, + id)
  }

  createOneRegister (nuevo) {
      return $.post(`${this.BASE_URL}/characters`, {
        name: nuevo.name,
        occupation: nuevo.occupation,
        weapon: nuevo.weapon,
        debt: nuevo.debt
      })
  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
