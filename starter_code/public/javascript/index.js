const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  $('.fetch-all').on('click', (event) => {
    charactersAPI.getFullList();
});

$('.fetch-one').on('click', (event) => {
  charactersAPI.getOneRegister($('.character-id').val());
});

  //document.getElementById('delete-one').onclick = function(){

  //}

  //document.getElementById('edit-character-form').onsubmit = function(){

  //}

  //document.getElementById('new-character-form').onsubmit = function(){

  //}
});
