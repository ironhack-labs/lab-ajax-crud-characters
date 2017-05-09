class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
    url: this.BASE_URL,
    method: "GET",
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  })
}



  getOneRegister (charID) {
    $.ajax({
    url: this.BASE_URL+charID,
    method: "GET",
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
  })
  }

  createOneRegister () {

    let name = $('#name-new').val();
    let occupation = $('#occupation-new').val();
    let debt = $('#debt-new').prop("checked");
    let weapon =   $('#weapon-new').val();
  const characterInfo = { name: name, occupation: occupation, debt: debt, weapon:weapon };

    $.ajax({
    url: this.BASE_URL,
    method: "POST",
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
    })

  }

  updateOneRegister () {
    $.ajax({
    url: "ih-api.herokuapp.com/characters/:id",
    method: "PUT",
    success: function (response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
    })
  }

  deleteOneRegister (charID) {
    $.ajax({
    url: this.BASE_URL+charID,
    method: "DELETE",
    success: function (response) {
    console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
    })
  }
}
