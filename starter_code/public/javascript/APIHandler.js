class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({url: `${this.BASE_URL}/characters`})
  }

  getOneRegister () {
    return $.ajax({url: `${this.BASE_URL}/characters/${id}`})
  }

  createOneRegister () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method: "POST"
    })
  }

  updateOneRegister () {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: "PATCH"
    })
  }

  deleteOneRegister () {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: "DELETE"
    })
  }
}
