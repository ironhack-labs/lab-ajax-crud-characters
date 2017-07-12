const charactersAPI = new APIHandler("http://ih-api.herokuapp.com"); //o aqui poner la barra

$(document).ready(() => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(characterList => {
      characterList.forEach(characterList => {
        console.log(characterList); //then significa una promesa por lo que necesita que su funcion tenga retorno
        //Add constants to print
        const $container = $('.characters-container');
        const $info = $(`<div>`).addClass('character-info');
        const $name = $(`<div>`).addClass('name').text(characterList.name);
        const $occupation = $(`<div>`).addClass('occupation').text(characterList.occupation);
        const $debt = $(`<div>`).addClass('debt').text(characterList.debt);
        const $weapon = $(`<div>`).addClass('weapon').text(characterList.wapon);
        //Append to show all in the same place
        $info
          .append($name)
          .append($occupation)
          .append($debt)
          .append($weapon);
        $container.append($info);
      });
    }, (err) => {
      console.log(err);
    });
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister($('#character-id').val()).then(info => {
      $('.name').text(info.name);
      $('.occupation').text(info.occupation);
      $('.debt').text(info.debt);
      $('.weapon').text(info.weapon);
    });
  });

  $('#delete-one').on('click', (e) => {

  });

  $('#edit-character-form').on('submit', (e) => {

  });

  $('#new-character-form').on('submit', (e) => {
    let name = $(`#create-name`).val();
    let occupation = $(`#create-occupation`).val();
    let weapon = $(`#create-weapon`).val();
    let debt = $(`#create-debt`).val() === "on" ? true : false;
    const newCharacter = {
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    };
    charactersAPI.createOneRegister(newCharacter).then(hero => {
      $("#send-data-create").css("background-color", "green");
    }, (err) => {
      console.log(err);
      $("#send-data-create").css("background-color", "red");
    });
  });
});
