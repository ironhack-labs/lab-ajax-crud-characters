const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
    let id = $("#fetch-one-input").val();
    charactersAPI.getOneRegister(id);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    let id = $("#deleteChar").val();
    charactersAPI.deleteOneRegister(id);
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let id = $("#editCharId").val();
    let edittedChar = {
      name: $("#editCharName").val(),
      occupation: $("#editCharOccupation").val(),
      weapon: $("#editCharWeapon").val(),
      debt: $("#editCharDebt").attr("checked")
    };
    charactersAPI.updateOneRegister(id, edittedChar);
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    let newCharacter = {
      name: $("#newCharName").val(),
      occupation: $("#newCharOccupation").val(),
      weapon: $("#newCharWeapon").val(),
      debt: $("#newCharDebt").attr("checked")
    };
    console.log(newCharacter);
    charactersAPI.createOneRegister(newCharacter);
  });
});
