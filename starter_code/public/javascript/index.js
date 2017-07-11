const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready(() => {

const $container =$('.characters-container');

const addCharacter = (evento) => {
  const $name = $(`<div><p>Name: ${evento.name}</p></div>`).addClass('name');
  const $occupation = $(`<div><p>occupation: ${evento.occupation}</p></div`).addClass('occupation');
  const $debt = $(`<div><p>debt: ${evento.debt}</p></div>`).addClass('debt');
  const $weapon = $(`<div><p>weapon: ${evento.weapon}</p></div>`).addClass('weapon');
  const $completeHeroe = $('<div>').addClass('characters-info')
    .append($name)
    .append($occupation)
    .append($debt)
    .append($weapon);
  $container.append($completeHeroe);
};


  $('#fetch-all').on('click', (evento) => {
    evento.preventDefault(); // Evita el funcionamiento normal
    charactersAPI.getFullList().then(heroes => {
      console.log(heroes);
      heroes.forEach(evento => evento ? addCharacter(evento) : console.log("error"));
    });
  });


  $('#fetch-one').on('click', (evento) => {
    evento.preventDefault();
    charactersAPI.getOneRegister($('#character-id').val()).then(heroe => {
        $(".name").text(heroe.name);
        $(".occupation").text(heroe.occupation);
        $(".weapon").text(heroe.weapon);
        $(".debt").text(heroe.debt);

        // const $containerById = $('.operations');
        // const $heroeContainerById = $('<div>').addClass('heroeByIdFull');
        // const $heroeIdById = $('<div>').addClass('id').text(`id: ${heroe.id}`);
        // const $heroeNameById = $('<div>').addClass('name').text(`name: ${heroe.name}`);
        // const $heroeOccupationById = $('<div>').addClass('occupation').text(`occupation: ${heroe.occupation}`);
        // const $heroeWeaponById = $('<div>').addClass('weapon').text(`weapon: ${heroe.weapon}`);

      // $heroeContainerById
      //   .append($heroeIdById)
      //   .append($heroeNameById)
      //   .append($heroeOccupationById)
      //   .append($heroeWeaponById);
      // $containerById.append($heroeContainerById);
    });
  });

//   $('#fetch-one').on('click', (e) => {
//   event.preventDefault();
//   const idForSearch = $("input[name='character-id']").val();
//   console.log(idForSearch);
//   charactersAPI.getOneRegister(idForSearch)
//     .then(heroe => {
//       const $searchById = $('.searchById');
//       const $heroeSearchContainer = $('<div>').addClass('character-info');
//       const $heroeSearchId = $('<div>').addClass('id').text(`Id: ${heroe.id}`);
//       const $heroeSearchName = $('<div>').addClass('name').text(`Name: ${heroe.name}`);
//       const $heroeSearchOccupation = $('<div>').addClass('Occup:').text(`occupation: ${heroe.occupation}`);
//       const $heroeSearchWeapon = $('<div>').addClass('weapon').text(`Weapon: ${heroe.weapon}`);
//
//       $heroeSearchContainer
//         .append($heroeSearchId)
//         .append($heroeSearchName)
//         .append($heroeSearchOccupation)
//         .append($heroeSearchWeapon);
//       $searchById.append($heroeSearchContainer);
//     });
// });

  $('#delete-one').on('click', (evento) => {
    evento.preventDefault();
    charactersAPI.deleteOneRegister($('#character-id-delete').val());
    console.log("Character has been successfully deleted");
  });
});



  $('#edit-character-form').on('submit', (evento) => {
    // evento.preventDefault();
    //   let idCharacter = $('#update-chr-id').val();
    //   let name = $('#update-name').val();
    //   let occupation = $('#update-occupation').val();
    //   let debt = $('#update-debt').val() === "on" ? true : false;
    //   let weapon = $('#update-weapon').val();
    //   const updatedHeroe = {
    //     name : name,
    //     occupation : occupation,
    //     debt : debt,
    // //     weapon : weapon
    //   }
    //
    // charactersAPI.updateOneRegister(idCharacter, updatedCharacter);

  });



  $('#new-character-form').on('submit', (evento) => {
    evento.preventDefault();


});
