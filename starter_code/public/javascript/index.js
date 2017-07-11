const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(figures => {
      console.log(figures);
      figures.forEach(figure => {
        const $container = $('.characters-container');
        const $figure = $('<div>').addClass('character-info');
        const $name = $('<div>').addClass('name').text(figure.name);
        const $occupation = $('<div>').addClass('occupation').text(figure.occupation);

        const $weapon = $('<div>').addClass('weapon').text(figure.weapon);

        $figure
          .append($name)
          .append($occupation)

          .append($weapon);

        $container.append($figure);

      });
    }, (err) => {
      console.log(err);
    });
  });

  $('#fetch-one').on('click', (e) => {
    const id = $('#characterID').val();
    charactersAPI.getOneRegister(id).then(figure => {
      console.log(figure);
      $('.name').text(figure.name);
      $('.occupation').text(figure.occupation);
      $('.weapon').text(figure.weapon);

    });
  });

  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#character-id-delete').val()).then( figure => {
      console.log(`Deleted ${$('#character-id-delete').val()}`);
});
  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {

  });
});
