class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL + '/characters',
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      }
    });
  }

  getOne (id) {
    $.ajax({
      url: this.BASE_URL + '/characters/' + id,
      method: "GET",
      success: function (response) {
        console.log(response);
      },
      error: function (err) {
        console.log(err);
      }
    });
  }

  createOne (formdata) {
    $.ajax({
      url: this.BASE_URL + '/characters',
      method: "POST",
      data: formdata,
      success: function (response) {
        console.log(response);
        $('#send-data').css('background-color', '#50f442');
      },
      error: function (err) {
        console.log(err);
        $('#send-data').css('background-color', '#f4414a');
      }
    });
  }

  updateOne (formdata, id) {
    $.ajax({
      url: this.BASE_URL + '/characters/' + id,
      method: "PUT",
      data: formdata,
      success: function (response) {
        console.log(response);
        $('#send-update').css('background-color', '#50f442');
      },
      error: function (err) {
        console.log(err);
        $('#send-update').css('background-color', '#f4414a');
      }
    });
  }

  deleteOne (id) {
    $.ajax({
      url: this.BASE_URL + '/characters/' + id,
      method: "DELETE",
      success: function (response) {
        console.log(response);
        $('#delete-one').css('background-color', '#50f442');
        refresh();
      },
      error: function (err) {
        console.log(err);
        $('#delete-one').css('background-color', '#f4414a');
        refresh();
      }
    });
  }
}
