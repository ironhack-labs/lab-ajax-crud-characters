class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
    url: 'https://ih-api.herokuapp.com/characters',
    method: "get",
    success: function(response) {
      console.log(response);
      // $.each(response, (i, val)=>{ <<SHOULD USE THIS!!!
      for (let i = 1; i < response.length; i++){
        $('.characters-container').append($('.character-info').eq(0).clone());
      }
      $('.c-id').each(function(index){
        $(this).text(response[index].id);
      });
      $('.c-name').each(function(index){
        $(this).text(response[index].name);
      });
      $('.c-occupation').each(function(index){
        $(this).text(response[index].occupation);
      });
      $('.c-debt').each(function(index){
        $(this).text(response[index].debt);
      });
      $('.c-weapon').each(function(index){
        $(this).text(response[index].weapon);
      });




    },
    error: function (err) {
      console.log(err);
    },
    });
  }

  getOneRegister () {
    var id = $('#char-id').val();
    $.ajax({
    url: 'https://ih-api.herokuapp.com/characters/' + id,
    method: "get",
    success: function(response) {

      $('.character-info').not(':first').remove();

      $('.c-id').text(response.id);
      $('.c-name').text(response.name);
      $('.c-occupation').text(response.occupation);
      $('.c-debt').text(response.debt);
      $('.c-weapon').text(response.weapon);
      console.log(response);

    },
    error: function (err) {
      console.log(err);
    },
    });
  }

  createOneRegister () {
    const characterInfo = {
    name: $('#the-name-input').val(),
    occupation: $('#the-occupation-input').val(),
    weapon: $('#the-weapon-input').val(),

    };
    if ( $('#the-debt-input').is(':checked') ) {
      characterInfo.debt = true;
    }


    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters/',
      method: "post",
      data: characterInfo,
      success: function(response) {
        console.log(response);

      },
      error: function (err) {
        console.log(err);
      },
    });


  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
