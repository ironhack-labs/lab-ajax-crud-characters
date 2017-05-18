const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {

//ALL
  $('#fetch-all').on('click', (e) => {
    $('.characters-container').children().remove();
    charactersAPI.getFullList();
  });

//ONE
  $('#fetch-one').on('click', (e) => {
    $('.characters-container').children().remove();
    let id = $('input[name="character-id"]').val();
      charactersAPI.getOneRegister(id);
  });

//NEW
  $('#new-character-form').on('submit', (e) => {
      e.preventDefault();
      var checkBox;
      if ($('input[name="debt"]').is(':checked')) {
         checkBox = true;
      } else {
         checkBox = false;
      }
      const characterInfo = {
         name: $('input[name="name"]').val(),
         occupation: $('input[name="occupation"]').val(),
         debt: checkBox,
         weapon: $('input[name="weapon"]').val()
      };
      console.log(characterInfo);
      charactersAPI.createOneRegister(characterInfo);
  });

//EDIT
  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    var id = $('input[name="chr-id"]').val();

    var CheckBox;
    if ($('#edit-character-form').find('input[name="debt"]').is(':checked')) {
       CheckBox = true;
    } else {
       CheckBox = false;
    }
    const characterInfo = {
       name: $('#edit-character-form').find('input[name="name"]').val(),
      //  name: $('input[name="name"]').val(),
       occupation: $('#edit-character-form').find('input[name="occupation"]').val(),
       debt: CheckBox,
       weapon: $('#edit-character-form').find('input[name="weapon"]').val()
    };
    console.log('HERE:  ',characterInfo);
    charactersAPI.updateOneRegister(characterInfo, id);
  });

//DELETE
  $('#delete-one').on('click', (e) => {
    $('.characters-container').children().remove();
    let id = $('input[name="character-id-delete"]').val();
    charactersAPI.deleteOneRegister(id);
  });




});
