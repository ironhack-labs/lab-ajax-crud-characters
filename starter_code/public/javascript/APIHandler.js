class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    console.log('BASE:  ',this.BASE_URL = baseUrl);
  }

  getFullList () {
      $.ajax({
        method: "GET",
        url: "http://ih-api.herokuapp.com/characters",
        success: function (response) {
          console.log(response);

          $("div.character-info").first().remove();
          response.forEach( (response) => {
            var fetchAll =
             `<div class="character-info">` +
             `<div class="name"> Name: ` + response.name + `</div>`+
             `<div class="occupation"> Occupation: `+response.occupation+`</div>`+
             `<div class="debt"> Debt: `+response.debt+`</div>`+
             `<div class="weapon"> Weapon: `+response.weapon+`</div>`+
             `<div class="id"> Id: `+response.id+`</div>`+
             `</div>`;
             console.log(fetchAll);
           $(fetchAll).appendTo('.characters-container');
       });
     },

        error: function (err) {
          console.log("%cERROR", "color: yellow; font-size: small");
        },
      });
  }

  getOneRegister (id) {
    $.ajax({
      method: "GET",
      dataType: 'json',
      url: "http://ih-api.herokuapp.com/characters/" + id,
      success: function (response) {
        console.log(response);
        $("div.character-info").first().remove();
          var fetchAll =
           `<div class="character-info">` +
           `<div class="name"> Name: ` + response.name + `</div>`+
           `<div class="occupation"> Occupation: `+response.occupation+`</div>`+
           `<div class="debt"> Debt: `+response.debt+`</div>`+
           `<div class="weapon"> Weapon: `+response.weapon+`</div>`+
           `<div class="id"> Id: `+response.id+`</div>`+
           `</div>`;
           console.log(fetchAll);
         $(fetchAll).appendTo('.characters-container');
         $('#fetch-one').css({"background-color": "green"});
         $('input[name="character-id"]').val('Character Found!!!');


   },

      error: function (err) {
        console.log("%cERROR", "color: red; font-size: small");
        $('#fetch-one').css({"background-color": "red"});
        $('input[name="character-id"]').val('Character not Found ;( ');


      },
    });
  }

  createOneRegister (characterInfo) {
    $.ajax({
      method: 'POST',
      url: this.BASE_URL + "/characters",
      data: characterInfo,
      success: function (response) {
        $("div.character-info").remove();
        var fetchAll =
          `<div class="character-info">` +
          `<div class="name"> <strong>Name:</strong> ` + response.name + `</div>`+
          `<div class="occupation"> <strong>Occupation:</strong> `+response.occupation+`</div>`+
          `<div class="debt"> <strong>Debt:</strong> `+response.debt+`</div>`+
          `<div class="weapon"> <strong>Weapon:</strong> `+response.weapon+`</div>`+
          `<div class="id"> Id: `+response.id+`</div>`+
          `</div>`;
        $(fetchAll).appendTo('.characters-container');
        console.log("saved");
        console.log(this.url);
      },
      error: function (response) {
        console.log("%cERROR", "color: red; font-size: small");
      }
    });
  }

  updateOneRegister (characterInfo, id) {
    $.ajax({
      dataType: 'json',
      method: 'PATCH',
      url: this.BASE_URL + "/characters/" + id,
      data: characterInfo,
      success: function (response) {
        $("div.character-info").remove();
        var fetchAll =
          `<div class="character-info">` +
          `<div class="name"> <strong>Name:</strong> ` + response.name + `</div>`+
          `<div class="occupation"> <strong>Occupation:</strong> `+response.occupation+`</div>`+
          `<div class="debt"> <strong>Debt:</strong> `+response.debt+`</div>`+
          `<div class="weapon"> <strong>Weapon:</strong> `+response.weapon+`</div>`+
          `<div class="id"> Id: `+response.id+`</div>`+
          `</div>`;
        $(fetchAll).appendTo('.characters-container');

        console.log("saved");
        console.log(this.url);
      },
      error: function (response) {
        console.log("%cERROR", "color: red; font-size: small");

      }
    });

  }
  deleteOneRegister (id) {
    $.ajax({
      method: 'DELETE',
      url: this.BASE_URL + "/characters/" + id,
      success: function (response) {
   $('input[name="character-id-delete"]').val('Character Deleted');
   $('#delete-one').css({"background-color": "green"});
        console.log(this.url);
      },
      error: function (response) {
        console.log("%cERROR", "color: red; font-size: small");
        $('#delete-one').css({"background-color": "red"});
        $('input[name="character-id-delete"]').val('Character wast not found ;(');

      }
    });
  }
}
