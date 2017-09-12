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
    $.ajax({
      url: this.BASE_URL + '/characters',
      method: "POST",
      data : user,
      success: (response) => console.log(response)
    });
  }

  updateOneRegister () {
    $.ajax({
      url: this.BASE_URL + '/characters/'+ id,
      method: "PATCH/PUT",
      success: (response) => console.log(response)
    });
  }

  deleteOneRegister () {
    $.ajax({
      url: this.BASE_URL + '/characters/'+ id,
      method: "DELETE",
      success: (response) => console.log(response)
    });
  }
}
