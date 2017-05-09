class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL,
      method: "get",
      //data: "In case we need to send data**" ,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+id,
      method: "get",
      //data: "In case we need to send data**" ,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister () {

    var inputName = $(".create1").val();
    var inputOccupation = $(".create2").val();
    var inputWeapon = $(".create3").val();
    var inputDebt = $(".create4").is(":checked");

    var data = {
      name: inputName,
      occupation: inputOccupation,
      weapon: inputWeapon,
      debt: inputDebt
    };

    $.ajax({
      url: this.BASE_URL,
      method: "post",
      data: data,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  updateOneRegister () {

  }

  deleteOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+id,
      method: "patch",
      //data: "In case we need to send data**" ,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
}
