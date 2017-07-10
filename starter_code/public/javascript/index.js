const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    var id = $("#idToSearch").val();
    console.log(id);
    charactersAPI.getOneRegister(id);
  });

  $('#delete-one').on('click', (e) => {
    var id = $("#idToDelete").val();
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

    var id = $("#idToEdit").val();

    const editChar = {
      name: $('#nameToEdit').val(),
      occupation: $('#occToEdit').val(),
      weapon: $('#weaponToEdit').val(),
      debt: $('#debtToEdit').is(':checked')
    };

    charactersAPI.updateOneRegister(id, editChar);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const newChar = {
      name: $('#newName').val(),
      occupation: $('#newOcc').val(),
      weapon: $('#newWeapon').val(),
      debt: $('#newDept').is(':checked')
    };

    charactersAPI.createOneRegister(newChar);
  });
});
