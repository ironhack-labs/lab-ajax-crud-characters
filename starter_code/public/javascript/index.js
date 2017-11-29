const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
      charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
      const charId = $("#character-id").val();
      charactersAPI.getOneRegister(charId);
  });

  $('#delete-one').on('click', (e) => {
      const deleteId = $("#character-id-delete").val();
      charactersAPI.deleteOneRegister(deleteId);
  });

  $('#edit-character-form').on('submit', (e) => {
      event.preventDefault();

      const charId = $("#update-id").val();
      const charName = $("#update-name").val();
      const charWeapon = $("#update-occupation").val();
      const charOccupation = $("#update-weapon").val();
      const charDebt = $("#update-debt").val();

      charactersAPI.updateOneRegister(charId, charName, charWeapon, charOccupation, charDebt);

      $("#edit-character-form").trigger("reset");
  });

  $('#new-character-form').on('submit', (e) => {
      event.preventDefault();

      const newName = $("#name").val();
      const newOccupation = $("#occupation").val();
      const newDebt = $("#debt").val();
      const newWeapon = $("#weapon").val();

      charactersAPI.createOneRegister(newName, newOccupation, newDebt, newWeapon);

      $("#new-character-form").trigger("reset");
  });
});
