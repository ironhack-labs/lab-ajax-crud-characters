class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method:'GET'
    });
  }

  getOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method:'GET'
    });
  }

  createOneRegister (char) {
    return $.ajax({
      url: `${this.BASE_URL}/characters`,
      method:'POST',
      data: char
    });

  }

  updateOneRegister (char) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${char.id}`,
      method:'PATCH',
      data: char
    });
  }

  deleteOneRegister (id) {
    return $.ajax({
      url: `${this.BASE_URL}/characters/${id}`,
      method:'DELETE'
    });
  }
}
