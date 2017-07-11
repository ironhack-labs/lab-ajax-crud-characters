const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (evento) => {
    evento.preventDefault(); // Evita el funcionamiento normal
    charactersAPI.getFullList().then( heroes => {
      console.log(heroes);
      heroes.forEach( heroe => {
        const $generalContainer = $('.characters-container');
        const $heroeContainer = $('<div>').addClass('character-info');
        const $heroeId = $('<div>').addClass('id').text(`id: ${heroe.id}`);
        const $heroeName = $('<div>').addClass('name').text(`name: ${heroe.name}`);
        const $heroeOccupation = $('<div>').addClass('occupation').text(`occupation: ${heroe.occupation}`);
        const $heroeWeapon = $('<div>').addClass('weapon').text(`weapon: ${heroe.weapon}`);

        $heroeContainer
          .append($heroeId)
          .append($heroeName)
          .append($heroeOccupation)
          .append($heroeWeapon);
        $generalContainer.append($heroeContainer);
      });
    });
  });


  $('#fetch-one').on('click', (evento) => {
    evento.preventDefault();

  });

  $('#delete-one').on('click', (evento) => {
    evento.preventDefault();

  });

  $('#edit-character-form').on('submit', (evento) => {
    evento.preventDefault();

  });

  $('#new-character-form').on('submit', (evento) => {
    evento.preventDefault();

  });
});
