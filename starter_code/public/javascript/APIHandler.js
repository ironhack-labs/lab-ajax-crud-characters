//Aquí van todas las rutas y subrutas, parámetros

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return $.get(`${this.BASE_URL}/characters`)
  }

  getOneRegister(id) {
    return $.get(`${this.BASE_URL}/characters/${id}`)
  }

  deleteOneRegister(id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'DELETE'
    })
  }

  createOneRegister(character) {
    return $.post(`${this.BASE_URL}/characters`, {
      name: character.name,
      occupation: character.occupation,
      debt: character.debt,
      weapon: character.weapon
    })
  }

  updateOneRegister(id,character) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method: 'PUT',
      data: character
    })
  }

}
