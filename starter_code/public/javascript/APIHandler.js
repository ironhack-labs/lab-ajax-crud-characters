class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL + '/characters',
      method: "GET",
      success: (response) => console.log(response)
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: this.BASE_URL + '/characters/'+ id,
      method: "GET",
      success: (response) => console.log(response)
    });
  }

  createOneRegister () {
    $.ajax({
      url: this.BASE_URL + '/characters',
      method: "PUSH",
      success: (response) => console.log(response)
    });
  }


  updateOneRegister () {
    $.ajax({
      url: this.BASE_URL + '/characters/'+ id,
      method: "PUSH",
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
