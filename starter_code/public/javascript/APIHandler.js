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

  createOneRegister (newCharInfo) {
    return $.ajax({
      method: "POST",
      url: `${this.BASE_URL}/characters`,
      data: newCharInfo
    })
  }

  updateOneRegister (editCharInfo) {
    return $.ajax({
      method: "PATCH",
      data: editCharInfo,
      url: `${this.BASE_URL}/characters/${editCharInfo.id}`
    })

  }

  deleteOneRegister(idForDelete) {
    return $.ajax({
      method: "DELETE",
      url: `${this.BASE_URL}/characters/${idForDelete}`
    })

  }
}
