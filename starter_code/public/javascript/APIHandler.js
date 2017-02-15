class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }


// ---------------------------------------------GET FULL LIST------------------------------------
getFullList () {
$.ajax({
      url: this.BASE_URL+"/characters",
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },

    });
  }

// -----------------------------------------------GET ONE-------------------------------------------
  getOneRegister (id) {
  $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },

    });
  }

// ----------------------------------------------CREATE ONE----------------------------------------
  createOneRegister(object) {
  $.ajax({
      type: "POST",
      url: this.BASE_URL+"/characters",
      data: object,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },

    });
  }

// --------------------------------------------------UPDATE---------------------------------------------
  updateOneRegister (id, object) {
  $.ajax({
      type: "PATCH",
      url: this.BASE_URL+"/characters/"+id,
      data: object,
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },

    });
  }

// --------------------------------------------------DELETE---------------------------------------------
  deleteOneRegister (id) {
  $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "DELETE",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      },

    });
  }
}
