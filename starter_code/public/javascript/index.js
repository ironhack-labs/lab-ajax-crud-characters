const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
		charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
		var characterID = $('input[name=character-id]').val();
		charactersAPI.getOneRegister(characterID);
  });

  $('#delete-one').on('click', (e) => {
		var characterID = $('input[name=character-id-delete]').val();
		charactersAPI.deleteOneRegister(characterID);
  });

	$('#new-character-form').on('submit', (e) => {
		e.preventDefault();
		const characterInfo = {
			name:       $('input[name=name]').val(),
			occupation: $('input[name=occupation]').val(),
			debt: 			$('input[name=debt]').checked,
			weapon:     $('input[name=weapon]').val(),
		};
		charactersAPI.createOneRegister(characterInfo);
	});

  $('#edit-character-form').on('submit', (e) => {
		e.preventDefault();
		const characterInfo = {
			name:       $('#edit-character-form input[name=name]').val(),
			occupation: $('#edit-character-form input[name=occupation]').val(),
			debt: 			$('#edit-character-form input[name=debt]').checked,
			weapon:     $('#edit-character-form input[name=weapon]').val(),
		};
		charactersAPI.updateOneRegister(characterInfo);
  });

});
