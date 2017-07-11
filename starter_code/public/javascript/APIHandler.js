class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'json'
    });
  }

  getOneRegister() {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      dataType: 'json'
    });

  }

  createOneRegister() {
    return $.ajax({
      type: "POST",
      url: `${this.BASE_URL}/characters`,
      dataType: 'json'
    });


  }

  updateOneRegister() {

  }

  deleteOneRegister(id) {
    //ih-api.herokuapp.com/characters/:id
    return $.ajax({
      type: 'DELETE',
      url: `${this.BASE_URL}/characters/${id}`,
      dataType: 'json'
    });

  }
}
