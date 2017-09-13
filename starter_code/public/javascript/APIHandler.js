class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'JSON',
      method: 'GET'
    })
  }

  getOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      dataType: 'JSON',
      data: id,
      method: 'GET'
    })
  }

  createOneRegister (character) {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      data: character,
      method: 'POST'
    })
  }

  // updateOneRegister (character) {
  //   return $.ajax({
  //     url: `${this.BASE_URL}/characters/${id}`,
  //     dataType: 'JSON',
  //     data: character,
  //     method: 'PATCH'
  //   })
  //
  // }
  //
  // deleteOneRegister () {
  //   return $.ajax({
  //     url: `${this.BASE_URL}/characters/${id}`,
  //     dataType: 'text',
  //     method: 'DELETE'
  //   })
  // }
}
