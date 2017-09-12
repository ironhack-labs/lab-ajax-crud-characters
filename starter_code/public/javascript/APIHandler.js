class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (id) {
    return $.get(`${this.BASE_URL}/characters/${id}`)
  }

  createOneRegister (char) {
    return $.post(`${this.BASE_URL}/characters`, char)
  }

  updateOneRegister (char) {
    return $.ajax({
      method: 'PUT',
      url: `${this.BASE_URL}/characters/${character.id}`,
      data: char
    })
  }

  deleteOneRegister (id) {
    return $.ajax({
      method: 'DELETE',
      url: `${this.BASE_URL}/characters/${id}`
    })
  }
}
