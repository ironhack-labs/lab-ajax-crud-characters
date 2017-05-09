/*jshint esversion: 6*/
const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList ();
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister (document.getElementsByName('character-id')[0].value);
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister (document.getElementsByName('character-id-delete')[0].value);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    var obj = {
      id: $('#edit-character-form').find("input[name='chr-id']").val(),
      name: $('#edit-character-form').find("input[name='name']").val(),
      occupation: $('#edit-character-form').find("input[name='occupation']").val(),
      weapon: $('#edit-character-form').find("input[name='weapon']").val(),
      debt: $('#edit-character-form').find("input[name='checkbox']").prop("checked"),
      //debt: $('#edit-character-form [name='checkbox']')
    };
    charactersAPI.updateOneRegister(obj);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    var obj = {
      name: $('#new-character-form').find("input[name='name']").val(),
      occupation: $('#new-character-form').find("input[name='occupation']").val(),
      weapon: $('#new-character-form').find("input[name='weapon']").val(),
      debt: $('#new-character-form').find("input[name='checkbox']").prop("checked"),
    };
    charactersAPI.createOneRegister(obj);
  });

});

function createCharacterInfo(obj) {
    return '<div class="character-info">'+
            '<div class="id">'+ obj.id + '</div>' +
            '<div class="name">'+ obj.name + '</div>' +
            '<div class="occupation">'+ obj.occupation + '</div>' +
            '<div class="debt">'+ obj.debt + '</div>' +
            '<div class="weapon">'+ obj.weapon + '</div>' +
            '</div>';

}
