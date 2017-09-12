class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl
  }

  getFullList() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`
    })
  }
  getOneRegister(characterId) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${characterId}`,
    })
  }
  createOneRegister (character) {
    return $.ajax({
      method: 'POST',
      url: `${this.BASE_URL}/characters`,
      data: character
    });
  }

  deleteOneRegister(characterId) {
    return $.ajax({
      method: 'DELETE',
      url: `${this.BASE_URL}/characters/${characterId}`,
    })
  }


  updateOneRegister (characterId, character) {
   return $.ajax({
     method: 'PATCH',
     url: `${this.BASE_URL}/characters/${characterId}`,
     data: character
   })
 }

}
