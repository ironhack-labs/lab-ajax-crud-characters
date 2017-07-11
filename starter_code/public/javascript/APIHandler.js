class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`
    }).catch( err => {
      console.log(err)
    })
  }

  getOneRegister(idForSearch) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${idForSearch}`
    })
  }

  createOneRegister (data) {
    return $.ajax({
      method: "POST",
      url: `${this.BASE_URL}/characters/`,
      data: data
    })
  }

  updateOneRegister () {

  }

  deleteOneRegister(idForDelete) {
    return $.ajax({
      method: "DELETE",
      url: `${this.BASE_URL}/characters/${idForDelete}`
    })

  }
}
