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

  createOneRegister () {
    return $.ajax({
      url: ' http://ih-crud-api.herokuapp.com/characters',
      method:'POST'
    });
  }

  updateOneRegister (id) {
    return $.ajax({
      url: `http://ih-crud-api.herokuapp.com/characters/${id}` ,
      method:'PUT'
    });
  }

  deleteOneRegister (id) {
    return $.ajax({
      url: `http://ih-crud-api.herokuapp.com/characters/${id}` ,
      method:'DELETE'
    });
  }
}
