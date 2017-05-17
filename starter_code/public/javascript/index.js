const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {

    charactersAPI.getFullList();

  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();

    const search = $('#searchID').val();

    getOneRegister(searchID);

    

  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();

    const editID = $('#editID').val();
    const charecterInfo = {
      name: $('#editName').val(),
      occupation: $('#editOccupation').val(),
      weapon: $('#editWeapon').val(),
      debt: $('#editDebt').prop('checked')

    };
    charactersAPI.updateOneRegister(editID, charecterInfo);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();

    const charecterInfo = {
      name: $('#name').val(),
      occupation: $('#occupation').val(),
      weapon: $('#weapon').val(),
      debt: $('#debt').prop('checked')
    };
    charactersAPI.createOneRegister(charecterInfo);
    console.log('New Charecter Submitted');


  });
});
