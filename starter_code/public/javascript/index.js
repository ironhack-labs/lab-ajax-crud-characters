const charactersAPI = new APIHandler("http://ih-api.herokuapp.com")

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    var characters = [];
    charactersAPI.getFullList().then(e => {
      e.map((el, i) => {
        var item = [
          $("name").clone().append(' ' + el.name),
          $("occupation").clone().append(' ' + el.occupation),
          $("debt").clone().append(' ' + el.debt),
          $("weapon").clone().append(' ' + el.weapon)
        ]
        characters.push($(".character-info").clone().html(item));
      });
      $('.characters-container').append(characters);
      $('.character-info').first().hide();
    });
  })

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister().then(e => {
      var item = [
        $("name").clone().append(' ' + e.name),
        $("occupation").clone().append(' ' + e.occupation),
        $("debt").clone().append(' ' + e.debt),
        $("weapon").clone().append(' ' + e.weapon)
      ]
      $(".characters-container").append($(".character-info").clone().html(item));
      $(".character-info").first().hide();
    });
  })

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($("input[name=character-id-delete]").val()).then(e => {
      var item = [
        $(".name").clone().append(' ' + e.name),
        $(".occupation").clone().append(' ' + e.occupation),
        $(".debt").clone().append(' ' + e.debt),
        $(".weapon").clone().append(' ' + e.weapon)
      ]
      $(".characters-container").append($(".character-info").clone().html(item));
      $(".character-info").first().remove();
    });
  })

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    var formInfo = $("#new-character-form").serialize();
    charactersAPI.updateOneRegister($("input[name=chr-id]").val(), formInfo);
  })

  $('#new-character-form').on('submit', (e) => {
    e.preventDefault();
    var formInfo = $("#new-character-form").serialize();
    charactersAPI.deleteOneRegister(formInfo);
  });
})
