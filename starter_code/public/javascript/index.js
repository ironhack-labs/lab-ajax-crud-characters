const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    e.preventDefault();
    const charList = charactersAPI.getFullList();
    charList.forEach(char => {
      const newCharHtml = $(`
        <ul>
          <li>Id: ${char.id}</li>
          <li>Name: ${char.name}</li>
          <li>Occupation: ${char.occupation}</li>
          <li>Debt: ${char.debt}</li>
          <li>Weapon: ${char.weapon}</li>
        </ul>
      `);
      $('body').append(newCharHtml);
    });
  });

  $('#fetch-one').on('click', (e) => {
    e.preventDefault();
    const charId = $('[name="character-id"]').val();
    const char = charactersAPI.getOneRegister(charId);
    const newCharHtml = $(`
      <ul>
        <li>Id: ${char.id}</li>
        <li>Name: ${char.name}</li>
        <li>Occupation: ${char.occupation}</li>
        <li>Debt: ${char.debt}</li>
        <li>Weapon: ${char.weapon}</li>
      </ul>
    `);
    $('body').append(newCharHtml);
  });

  $('#delete-one').on('click', (e) => {
    e.preventDefault();
    const charId = $('[name="character-id-delete"]').val();
    const message = charactersAPI.deleteOneRegister(charId);
    if (message === "character has been successfully deleted"){
      $('#delete-one').css("background-color", "green");
    }else{
      $('#delete-one').css("background-color", "red");
    }
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    const charObj = {
      id: $('#edit-character-form > name=["chr-id"]').val(),
      name: $('#edit-character-form > name=["name"]').val(),
      occupation: $('#edit-character-form > name=["occupation"]').val(),
      weapon: $('#edit-character-form > name=["weapon"]').val(),
      debt: $('#edit-character-form > name=["debt"]').val()
    };
    const newChar = charactersAPI.updateOneRegister(charObj);
    if (newChar.hasOwnProperty('name')){
      $('#edit-character-form > .submit-button').css("background-color", "green");
    }else{
      $('#edit-character-form > .submit-button').css("background-color", "red");
    }
    $('#edit-character-form > .character-form').trigger('reset');
  });

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    const charObj = {
      name: $('#new-character-form > name=["name"]').val(),
      occupation: $('#new-character-form > name=["occupation"]').val(),
      weapon: $('#new-character-form > name=["weapon"]').val(),
      debt: $('#new-character-form > name=["debt"]').val()
    };
    const newChar = charactersAPI.createOneRegister(charObj);
    if (newChar.hasOwnProperty('name')){
      $('#new-character-form > .submit-button').css("background-color", "green");
    }else{
      $('#new-character-form > .submit-button').css("background-color", "red");
    }
    $('.character-form').trigger('reset');
  });
});
