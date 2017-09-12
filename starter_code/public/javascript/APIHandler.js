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

  createOneRegister ( character ) {
    return $.post(`${this.BASE_URL}/characters`,{
      name: character.name,
      occupation: character.occupation,
      debt: character.debt,
      weapon: character.weapon
    })
  }

  updateOneRegister ( character, id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'PUT',
      data: character,
    });
  }

  deleteOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'DELETE',
    })
  }
}
