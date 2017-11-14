class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: 'http://ih-crud-api.herokuapp.com/characters',
      method:'GET'
    });
  }

  getOneRegister (id) {
    return $.ajax({
      url: `http://ih-crud-api.herokuapp.com/characters/${id}` ,
      method:'GET'
    });
  }

  createOneRegister (character) {
    return $.ajax({
      url: ' http://ih-crud-api.herokuapp.com/characters',
      method:'POST',
      data: character
    });
  }

  updateOneRegister (id, character) {
    return $.ajax({
      url: `http://ih-crud-api.herokuapp.com/characters/${id}` ,
      method:'PUT',
      data: character
    });
  }

  deleteOneRegister (id) {
    return $.ajax({
      url: `http://ih-crud-api.herokuapp.com/characters/${id}` ,
      method:'DELETE'
    });
  }
}
