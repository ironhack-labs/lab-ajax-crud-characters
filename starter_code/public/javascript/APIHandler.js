class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url : 'https://ih-api.herokuapp.com/characters',
      method : 'GET',
      data : null,
      error : (error) => console.log('getFullList error'),
      success : (data) => {

      }
    });
  }

  getOneRegister () {
    $.ajax({
      url : 'https://ih-api.herokuapp.com/characters',
      method : 'GET',
      data : null,
      error : (error) => console.log('getOneRegister error'),
      success : (data) => {

      }
    });
  }

  createOneRegister () {
    $.ajax({
      url : 'https://ih-api.herokuapp.com/characters',
      method : 'POST',
      data : null,
      error : (error) => console.log('createOneRegister error'),
      success : (data) => {

      }
    });
  }

  updateOneRegister () {
    $.ajax({
      url : 'https://ih-api.herokuapp.com/characters',
      method : 'PUT',
      data : null,
      error : (error) => console.log('updateOneRegister error'),
      success : (data) => {

      }
    });
  }

  deleteOneRegister () {
    $.ajax({
      url : 'https://ih-api.herokuapp.com/characters',
      method : 'DELETE',
      data : null,
      error : (error) => console.log('deleteOneRegister error'),
      success : (data) => {

      }
    });
  }
}
