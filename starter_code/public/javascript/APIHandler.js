class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister (characterId) {
    return $.get(`${this.BASE_URL}/characters/${characterId}`)
   }

  createOneRegister (character) {
    return $.post(`${this.BASE_URL}/characters`, character)
  }

  updateOneRegister (character) {
    $.ajax({
      url: `${this.BASE_URL}/characters/${character.id}`,
      type: 'PUT',
      data: character,
      success: function(result) {
          return character
      },
      error: function(error) {
        console.log("Character not found")
      }

    //return $.put(`${this.BASE_URL}/characters`, character)

    });
  }

  deleteOneRegister () {

  }
}
