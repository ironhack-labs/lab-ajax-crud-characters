const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList();

  });

  $('#fetch-one').on('click', (e) => {
    event.preventDefault();
    const oneId = $("#character-id").val();
    charactersAPI.getOneRegister(oneId);

  });


  $('#delete-one').on('click', (e) => {
    event.preventDefault();
    const idToDelete = $("#character-id-delete").val();
    charactersAPI.deleteOneRegister(idToDelete);


  });

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();
    const editedId=$("#id-edit-input").val();
    const editedName = $("#name-edit-input").val();
    const editedJob = $("#occupation-edit-input").val();
    const editedDebt = $("#debt-edit-input").val();
    const editedWeapon = $("#weapon-edit-input").val();

    charactersAPI.updateOneRegister(editedId, editedName, editedJob, editedDebt,editedWeapon);

    //clears the inputs again
    $(".edit-character-form").trigger("reset");

  });

  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
    const newName = $("#name-input-new").val();
    const newJob = $("#occupation-input-new").val();
    const newDebt = $("#debt-input-new").val();
    const newWeapon = $("#weapon-input-new").val();

    charactersAPI.createOneRegister(newName, newJob, newDebt,newWeapon);

    //clears the inputs again
    $(".new-character-form").trigger("reset");
  });

});//doc ready
