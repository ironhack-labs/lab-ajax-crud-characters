class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'JSON',
      method: 'GET'
    })
  }

  getOneRegister ( id ) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      dataType: 'JSON',
      method: 'GET'
    })
  }

  createOneRegister ( character ) {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'JSON',
      data: character,
      method: 'POST'
    })
  }

  updateOneRegister ( character ) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${character['chr-id']}`,
      dataType: 'JSON',
      data: character,
      method: 'PUT'
    })
  }

  deleteOneRegister ( id ) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      dataType: 'text',
      method: 'DELETE'
    })
  }
}
