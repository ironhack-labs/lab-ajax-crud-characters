class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
  url: "http://ih-api.herokuapp.com/characters",
  method: "GET",
  success: function (response) {
    console.log(response);
    response.forEach(function(character){
      $('.name').html(character.name);
      $('.occupation').html(character.occupation);
      $('.debt').html(character.debt);
      $('.weapon').html(character.weapon);
    });
  },
  error: function (err) {
  console.log(err);
  },
  });

  }

  getOneRegister () {
    var idC = $('input').val();
    console.log(idC);
    $.ajax({
      url: `http://ih-api.herokuapp.com/characters/${idC}`,
      method: "GET",
      success: function (response) {
          $('.name').html(response.name);
          $('.occupation').html(response.occupation);
          $('.debt').html(response.debt);
          $('.weapon').html(response.weapon);

      },
      error: function (err) {
      console.log(err);
      },
    });

  }

  createOneRegister () {
  const characterInfo = {
    name: $("input[name='name']").val(),
    occupation: $("input[name='occupation']").val(),
    deb: $("input[name='deb']").is(":checked"),
    weapon: $("input[name='weapon']").val()

  };
    $.ajax({
    type: 'POST',
    url: 'https://ih-api.herokuapp.com/characters',
    data: characterInfo,
    success: function (response) {
      $( "#send-data" ).css( "background-color", "green" );
    },
    error: function (err) {
    $( "#send-data" ).css( "background-color", "red" );}
  });
  }

  updateOneRegister () {
    const updateInfo = {
      name: $("input[name='name']").val(),
      occupation: $("input[name='occupation']").val(),
      deb: $("input[name='deb']").is(":checked"),
      weapon: $("input[name='weapon']").val()
  };


  const charId = $("input[name='chr-id']").val();

  $.ajax({
    type: 'PATCH',
    url: `https://ih-api.herokuapp.com/characters/${charId}`,
    data: updateInfo,
    success: function (response) {
      $( "#send-data" ).css( "background-color", "green" );
    },
    error: function (err) {
    $( "#send-data" ).css( "background-color", "green" );
    },
  });
  }

  deleteOneRegister () {
    var idC = $("input[name='character-id-delete']").val();
    console.log(idC);
    $.ajax({
      type: 'DELETE',
      url: `http://ih-api.herokuapp.com/characters/${idC}`,
      success: function (response) {
        $( "#delete-one" ).css( "background-color", "green" );
      },
      error: function (err) {
      $( "#delete-one" ).css( "background-color", "red" );
      },
    });

  }
}
