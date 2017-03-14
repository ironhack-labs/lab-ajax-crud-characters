$(document).ready(() => {

  $('#fetch-one').click(() => {
    console.log("Test");
    getPokemonInfo(130);
  });

  // $('#post-wall-e').click(() => {
  //   const wallE = {
  //     name: 'WALL-E',
  //     occupation: 'Waste Allocation Robot',
  //     weapon: 'Head laser'
  //   };
  //
  //   postCharacter(wallE);
  // });
  //
  // $('#character-form').submit((event) => {
  //   event.preventDefault();
  //
  //   const characterInfo = {
  //     name:       $('#the-name-input').val(),
  //     occupation: $('#the-occupation-input').val(),
  //     weapon:     $('#the-weapon-input').val()
  //   };
  //
  //   postCharacter(characterInfo);
  // });
  //
  // $('#update-form').submit((event) => {
  //   event.preventDefault();
  //
  //   const charId = $('#character-id-input').val();
  //   const updateInfo = {
  //     name:       $('#update-name-input').val(),
  //     occupation: $('#update-occupation-input').val(),
  //     weapon:     $('#update-weapon-input').val()
  //   };
  //
  //   updateCharacter(charId, updateInfo);
  // });
  //
  //
  //
  // function updateCharacter (id, charInfo) {
  //   $.ajax({
  //     url: `https://ih-api.herokuapp.com/characters/${id}`,
  //     method: 'PUT',
  //     data: charInfo,
  //     success: (result) => {
  //       console.log(`PUT ${result.name} success`);
  //       console.log(result);
  //
  //       $('#update-form').trigger('reset');
  //       $('#feedback').html(`
  //         ${result.name} (id ${result.id}) was updated sucessfully.
  //       `);
  //     },
  //     error: (err) => {
  //       console.log('PUT error');
  //       console.log(err);
  //     }
  //   });
  // }
  //
  //
  // function postCharacter (charInfo) {
  //   $.ajax({
  //     url: 'https://ih-api.herokuapp.com/characters',
  //     method: 'POST',
  //     data: charInfo,
  //     success: (data) => {
  //       console.log(`POST ${data.name} success!`);
  //       console.log(data);
  //
  //       $('#character-form').trigger('reset');
  //       $('#feedback').html(`
  //         ${data.name} (id ${data.id}) was added.
  //       `);
  //     },
  //     error: (err) => {
  //       console.log('POST character error');
  //       console.log(err);
  //     }
  //   });
  // }


  function getPokemonInfo (id) {
    $.ajax({
      url: `ih-api.herokuapp.com/characters/${id}/`,
      method: 'GET',
      success: (data) => {
        console.log(`GET ${characters.name} success`);
        console.log(data);

        $('#pokeInfo').html(`
          ${characters.name}
        `);
      },
      error: (err) => {
        console.log('GET pokemon error');
        console.log(err);
      }
    });
  }

});
