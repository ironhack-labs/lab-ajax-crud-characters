class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
      $.ajax({
          url: "http://ih-api.herokuapp.com/characters",
          method: "GET",
          success: function (response) {
              printFullList(response);
            },
            error: function (err) {
              console.log(err);
            },
      });
  }

  getOneRegister (id) {
      $.ajax({
          url: "http://ih-api.herokuapp.com/characters/"+id,
          method: "GET",
          success: function (response) {
              printCharacter(response);
          },
          error: function (err) {
              console.log(err);
          },
      });
  }

  createOneRegister () {
        let name = $('#name-new').val();
        let occupacy = $('#occupation-new').val();
        let debt = $('#debt-new').prop("checked");
        let weapon =  $('#weapon-new').val();
        const characterInfo = { name: name, occupation: occupacy, debt: debt, weapon: weapon }
        $.ajax({
            type:    'POST',
            url:     'http://ih-api.herokuapp.com/characters',
            data:    characterInfo,
            success: function (response) {
                showCreation(response);
            },
            error: function (err){
                console.log(err);
            }
        });

  }

  updateOneRegister () {
        let name = $('#name-new').val();
        let occupacy = $('#occupation-new').val();
        let debt = $('#debt-new').prop("checked");
        let weapon =  $('#weapon-new').val();
        const characterInfo = { name: name, occupation: occupacy, debt: debt, weapon: weapon }
        $.ajax({
            type:    'PATCH',
            url:     'http://ih-api.herokuapp.com/characters',
            data:    characterInfo,
            success: function (response) {
                showUpdate(response);
              },
              error: function (err){
                console.log(err);
              }
            });
  }

  deleteOneRegister () {

  }
}
