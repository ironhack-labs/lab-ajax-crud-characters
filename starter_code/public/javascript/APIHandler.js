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

  updateOneRegister (user) {
    console.log(user.id);
    return $.ajax({
      url: this.BASE_URL + '/characters/'+ user.id,
      method: "PUT",
      data : user,
      success: console.log("bien"),
      error: console.log("mal")
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
