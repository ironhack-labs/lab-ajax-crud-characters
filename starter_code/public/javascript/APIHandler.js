class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      method: 'GET',
      url: this.BASE_URL + "/characters",
      dataType: 'json',
      success: function (response) {
        $("div.character-info").remove();
        // $('.character-info').remove();
        response.forEach(function(character) {
          var tempDiv =
            `<div class="character-info">` +
            `<div class="name"> <strong>Name:</strong> ` + character.name + `</div>`+
            `<div class="occupation"> <strong>Occupation:</strong> `+character.occupation+`</div>`+
            `<div class="debt"> <strong>Debt:</strong> `+character.debt+`</div>`+
            `<div class="weapon"> <strong>Weapon:</strong> `+character.weapon+`</div>`+
            `</div>`;
            console.log(tempDiv);
          $(tempDiv).appendTo('.characters-container');
        });
      },
      error: function (response) {
        console.log("error dude");
      }
    });
  }

  getOneRegister (id) {
    $.ajax({
      method: 'GET',
      url: this.BASE_URL + "/characters/" + id,
      dataType: 'json',
      success: function (character) {
        $("div.character-info").remove();
          var tempDiv =
            `<div class="character-info">` +
            `<div class="name"> <strong>Name:</strong> ` + character.name + `</div>`+
            `<div class="occupation"> <strong>Occupation:</strong> `+character.occupation+`</div>`+
            `<div class="debt"> <strong>Debt:</strong> `+character.debt+`</div>`+
            `<div class="weapon"> <strong>Weapon:</strong> `+character.weapon+`</div>`+
            `</div>`;
          $(tempDiv).appendTo('.characters-container');
        },

      error: function (response) {
        $('input[name="character-id"]').val("Character Not Found");
        console.log(this.url);
        console.log("error dude");
      }
    });
  }

  createOneRegister (characterInfo) {
    $.ajax({
      method: 'POST',
      url: this.BASE_URL + "/characters",
      data: characterInfo,
      success: function (character) {
        $("div.character-info").remove();
        var tempDiv =
          `<div class="character-info">` +
          `<div class="name"> <strong>Name:</strong> ` + character.name + `</div>`+
          `<div class="occupation"> <strong>Occupation:</strong> `+character.occupation+`</div>`+
          `<div class="debt"> <strong>Debt:</strong> `+character.debt+`</div>`+
          `<div class="weapon"> <strong>Weapon:</strong> `+character.weapon+`</div>`+
          `</div>`;
        $(tempDiv).appendTo('.characters-container');
        console.log("saved");
        console.log(this.url);
      },
      error: function (response) {
        console.log("error dude");
      }
    });
  }

  updateOneRegister (characterInfo,id) {
    $.ajax({
        dataType: 'json',
        method: 'PATCH',
        url: this.BASE_URL + "/characters/" + id,
        // contentType: 'application/json',
        data: characterInfo,
        // processData: false,
        success: function(characterInfo){
          $("div.character-info").remove();
          var tempDiv =
            `<div class="character-info">` +
            `<div class="name"> <strong>Name:</strong> ` + characterInfo.name + `</div>`+
            `<div class="occupation"> <strong>Occupation:</strong> `+characterInfo.occupation+`</div>`+
            `<div class="debt"> <strong>Debt:</strong> `+characterInfo.debt+`</div>`+
            `<div class="weapon"> <strong>Weapon:</strong> `+characterInfo.weapon+`</div>`+
            `</div>`;
          $(tempDiv).appendTo('.characters-container');
        console.log("saved");
      },
      error: function (response) {
        $('input[name="chr-id"]').val("Character Not Found");
        console.log("error dude");
      }
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      method: 'DELETE',
      url: this.BASE_URL + "/characters/" + id,
      success: function (character) {
        $('input[name="character-id-delete"]').val('Character Deleted');
        console.log("done");
      },
      error: function (response) {
        $('input[name="character-id-delete"]').val('Character Not Found');
        console.log("error dude");
      }
    });
  }
}
