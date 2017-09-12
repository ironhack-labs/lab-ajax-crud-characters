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
    $.ajax({
    url: 'https://ih-api.herokuapp.com/characters',
    method: "get",
    success: function(response) {
      console.log(response);
    },
    error: function (err) {
      console.log(err);
    },
    });
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
