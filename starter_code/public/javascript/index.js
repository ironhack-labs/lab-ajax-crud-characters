const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
charactersAPI.getFullList();
  });

  $('#fetch-one').on('click', (e) => {
charactersAPI.getOneRegister($('#searchByID').val());
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#deleteOne').val());
  });



  // ===============================================================
  $('#new-character-form').on('submit', (e) => {
    event.preventDefault();
var
name = $('#name').val(),
occupation = $('#occupation').val(),
debt ,
weapon = $('#weapon').val();

if( $('#debt').prop("checked",true)){
  debt = true;
}else {
  debt = false;
}
console.log(name,occupation,debt,weapon);
charactersAPI.createOneRegister(name,occupation,debt,weapon);
  });

  $('#edit-character-form').on('submit', (e) => {
    event.preventDefault();

    var
    one = $('#updateOne').val(),
    name = $('#edit-name').val(),
    occupation = $('#edit-occupation').val(),
    debt ,
    weapon = $('#edit-weapon').val();
    if( $('#edit-debt').prop("checked",true)){
      debt = true;
    }else {
      debt = false;
    }
charactersAPI.updateOneRegister(one,name,occupation,debt,weapon);
  });

});
