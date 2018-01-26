const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {
  document.getElementById('fetch-all').onclick = function () {

  }
  $("#fetch-all").click(function () {
    charactersAPI.getFullList();
  });
  
  $("#fetch-one").click(function () {
    charactersAPI.getOneRegister($( "#character-id" ).val());
  });

  document.getElementById('delete-one').onclick = function () {

  }

  $('#edit-character-form').on('submit', (event) => {
    event.preventDefault();
    var $inputs = $('#edit-character-form :input');
    var values = {};
    $inputs.each(function () {
      values[this.name] = $(this).val();
    });
    charactersAPI.updateOneRegister(values);
  });

  $('#new-character-form').on('submit', (event) => {
    event.preventDefault();

    var $inputs = $('#new-character-form :input');
    var values = {};
    $inputs.each(function () {
      values[this.name] = $(this).val();
    });
    charactersAPI.createOneRegister(values);
  });
})