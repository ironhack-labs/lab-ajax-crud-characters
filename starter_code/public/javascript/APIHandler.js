class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`
    });
  }

  getOneRegister (charId) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${charId}`,
    });
  }

  createOneRegister (character) {
    return $.ajax({
      method: 'POST',
      url: `${this.BASE_URL}/characters`,
      data: character
    });
  }

  updateOneRegister (charId, character) {
    return $.ajax({
      method: 'PATCH',
      url: `${this.BASE_URL}/characters/${charId}`,
      data: character
    });
  }

  deleteOneRegister (charId) {
    return $.ajax({
      method: 'DELETE',
      url: `${this.BASE_URL}/characters/${charId}`
    });
  }
}
