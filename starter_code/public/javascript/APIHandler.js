class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    return $.ajax({
      url: this.BASE_URL + '/characters',
      method: "GET"
    });
  }

  getOneRegister (id) {
    console.log(id);
    return $.ajax({
      url: this.BASE_URL + '/characters/' + id,
      method: "GET"
    });
  }

  createOneRegister (user) {
    return $.ajax({
      url: this.BASE_URL + '/characters',
      method: "POST",
      data : user
    });
  }

  updateOneRegister () {
    $.ajax({
      url: this.BASE_URL + '/characters/'+ id,
      method: "PATCH/PUT",
      success: (response) => console.log(response)
    });
  }

  deleteOneRegister (id) {
    console.log(id);
    return $.ajax({
      url: this.BASE_URL + '/characters/'+ id,
      method: "DELETE",
    });
  }
}
