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
    charactersAPI.deleteOneRegister($('#character-id-delete').val()).then(figure => {
      console.log(`Deleted ${$('#character-id-delete').val()}`);
    });
  });

  $('#edit-character-form').on('submit', (e) => {
    e.preventDefault();
    let idCharacter = $('update-id').val();
    let name = $('#update-name').val();
    let occupation = $('#update-occupation').val();
    let debt = $('#new-debt').val() === "on" ? true : false;
    let weapon = $('#update-weapon').val();
    const updatedCharacter = {
      name: name,
      occupation: occupation,
      debt: debt,
      weapon: weapon
    };
    console.log(idCharacter);
    charactersAPI.updateOneRegister(idCharacter, updatedCharacter);
   });
});

$('#new-character-form').on('submit', (e) => {
  e.preventDefault();
  let name = $('#create-name').val();
  let occupation = $('#create-occupation').val();
  let debt = $('#create-debt').val() === "on" ? true : false;
  let weapon = $('#create-weapon').val();
  const newCharacter = {
    name: name,
    occupation: occupation,
    debt: debt,
    weapon: weapon
  };
  charactersAPI.createOneRegister(newCharacter).then(data=> console.log(data));
  console.log("he creado a dani");

});
  });
