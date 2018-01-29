const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready(() => {

  $('#new-character-form').on('submit', (event) => {
    event.preventDefault();
    var $inputs = $('#new-character-form :input');
    var values = {};
    $inputs.each(function () {
      values[this.name] = $(this).val();
    });
    charactersAPI.createOneRegister(values);
  });

  $("#fetch-all").click(function () {
    charactersAPI.getFullList();
  });
  
  $("#fetch-one").click(function () {
    charactersAPI.getOneRegister($( "#character-id" ).val());
  });

  $('#edit-character-form').on('submit', (event) => {
    event.preventDefault();
    var $inputs = $('#edit-character-form :input');
    var values = {};
    $inputs.each(function () {
      values[this.name] = $(this).val();
    });
    charactersAPI.updateOneRegister(values);
  });

  $("#delete-one").click(function () {
    charactersAPI.deleteOneRegister($( "#character-id-delete" ).val());
  });





})