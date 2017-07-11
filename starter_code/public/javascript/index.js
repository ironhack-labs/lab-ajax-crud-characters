const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then((heroes) => {
      console.log(heroes);
      heroes.forEach(heroe => {
        const $container = $('.characters-container');
        const $heroe = $('<div>').addClass('character-info');
        const $name = $('<div>').addClass('name').text(heroe.name);
        const $occupation = $('<div>').addClass('occupation').text(heroe.occupation);
        const $song = $('<div>').addClass('song').text(heroe.song);
        $heroe
          .append($name)
          .append($occupation)
          .append($song);

        $container.append($heroe);
      });
    }, (err) => {
      console.log(err);
    });
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#character-id-delete').val()).then((heroes) => {
      console.log(heroes);
      heroes.forEach(heroe => {
        const $name = $('name').text(heroe.name);
        const $occupation = $('occupation').text(heroe.occupation);
        const $song = $('song').text(heroe.song);
        $heroe
          .append($name)
          .append($occupation)
          .append($song);

        $container.append($heroe);
      });
    }, (err) => {
      console.log(err);
    });

  });



  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister($('#character-id-delete').val()).then(heroes => {
      console.log(`Deleted`);

    }, (err) => {
      console.log(err);
    });
  });


  $('#edit-character-form').on('submit', (e) => {


  });


  $('#new-character-form').on('submit', (e) => {

    charactersAPI.createOneRegister().then((heroes) => {
      console.log("heroes");
      // const $container = $('.characters-container');
      const $name = $('input:text[name=name]').val();
      const $occupation = $('input:text[name=occupation]').val();
      const $song = $('input:text[name=song]').val();
      console.log(name);
      console.log(occupation);
      console.log(song);

    }, (err) => {
      console.log(err);
    });
  });

});
