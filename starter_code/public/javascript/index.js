const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
      charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
        event.preventDefault();
        const oneId = $('#character-id').val();
        charactersAPI.getOneRegister(oneId);
    });

    $('#new-character-form').on('submit', (e) => {
        event.preventDefault();

        const charName   =  $("#name-new").val();
        const charWeapon =  $("#weapon-new").val();
        const charJob    =  $("#job-new").val();
        const charDebt   =  $("#debt-new").val();

        charactersAPI.createOneRegister(charName, charJob, charWeapon, charDebt);
        // empties the form again
        $('#new-character-form').trigger("reset");
    });

  $('#delete-one').on('click', (e) => {
      event.preventDefault();
      const oneId = $('#character-id-delete').val();
      charactersAPI.deleteOneRegister(oneId);
  });

  $('#edit-character-form').on('submit', (e) => {

  });

});
