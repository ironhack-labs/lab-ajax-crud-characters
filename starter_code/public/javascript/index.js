const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
   charactersAPI.getFullList(function(response){
    var charactersContainer = $('.characters-container');
    var characterInfo = $(charactersContainer).html(); 
    for (var i = 0; i<response.length -1; i++) {
      $(charactersContainer).append(characterInfo);
    }

    response.forEach((element, index) => {
      $('.name:eq( ' + index + ')').text('Character Name: ' + element.name);
      $('.occupation:eq( ' + index + ')').text('Character Occupation: ' + element.occupation);
      $('.debt:eq( ' + index + ')').text('Character Debt: ' + element.debt);
      $('.weapon:eq( ' + index + ')').text('Character Weapon: ' + element.weapon);
    });   
   });
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('input[name=character-id]').val(), function(response){
    var characterInfo = $(charactersContainer).html();
    var charactersContainer = $('.characters-container');
    $(charactersContainer).append(characterInfo);
    $('.name:last').text('Character Name: ' + response.name);
    $('.occupation:last').text('Character Occupation: ' + response.occupation);
    $('.debt:last').text('Character Debt: ' + response.debt);
    $('.weapon:last').text('Character Weapon: ' + response.weapon);
    if ($('.character-info').length > 1) {
      $('.character-info').not(':last').remove();
    }
    });
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('input[name=character-id-delete]').val(), function(response){
      if (response === 'Character has been successfully deleted') {
        $('#delete-one').css({'background':'green'});
      } else {
        $('#delete-one').css({'background':'red'});
      }
    });
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let debt = false;
    if ($('#edit-character-form input[name=debt]').is(":checked")) {
      debt = true;
    }
    const characterInfo = {
      name:       $('#edit-character-form input[name=name]').val(),
      occupation: $('#edit-character-form input[name=occupation]').val(),
      weapon:     $('#edit-character-form input[name=weapon]').val(),
      debt:       debt,
    };

    charactersAPI.updateOneRegister($('#edit-character-form input[name=chr-id]').val(), characterInfo, function(response){
       if (response.id) {
        $('#edit-character-form #send-data').css({'background':'green'});
       } else {
        $('#edit-character-form #send-data').css({'background':'red'});
      }
    });
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let debt = false;
    if ($('#new-character-form input[name=debt]').is(":checked")) {
      debt = true;
    }
    const characterInfo = {
      name:       $('#new-character-form input[name=name]').val(),
      occupation: $('#new-character-form input[name=occupation]').val(),
      weapon:     $('#new-character-form input[name=weapon]').val(),
      debt:       debt,
    };

    charactersAPI.createOneRegister(characterInfo, function(response){
       if (response.id) {
        $('#new-character-form #send-data').css({'background':'green'});
       } else {
        $('#new-character-form #send-data').css({'background':'red'});
      }
    });
  });
});
