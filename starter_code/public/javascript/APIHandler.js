class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return $.ajax({
      url: this.BASE_URL + "/characters",
      method: "GET",
    });
  }

  getOneRegister(id) {
    return $.ajax({
      url: this.BASE_URL + "/characters/" + id,
      method: "GET",

    });
  }

  createOneRegister(newCharacter) {
    $.ajax({
      method: 'POST',
      url: this.BASE_URL + "/characters",
      data: character,
    });
  }

  updateOneRegister(id, character) {
    $.ajax({
      method: 'PATCH',
      url: this.BASE_URL + "/characters/" + id,
      data: character
    });

  }

  deleteOneRegister(id) {
    return $.ajax({
      method: 'DELETE',
      url: this.BASE_URL + "/characters/" + id,
      error: 404
    });
  }
}
