const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");
//
// $(document).ready( () => {
//   $('#fetch-all').on('click', (e) => {
//
//   })
//
//
//   $('#delete-one').on('click', (e) => {
//
//   })
//
//   $('#edit-character-form').on('submit', (e) => {
//
//   })
//
//   $('#new-character-form').on('submit', (e) => {
//
//   })
// })

$(document).ready(() => {

  $('#fetch-one').on('click', (e) => {
    const id = $("#get-one").val();
    getInfo(id);
  });
  function postCharacter (charInfo) {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'POST',
      data:charInfo,
      success: (data) => {
        console.log(`POST ${data.name} success!`);
        console.log(data);

        $('#new-character-form').trigger('reset');
        // $('#feedback').html(`
        //   ${data.name} (id ${data.id}) was added.
        //   `);
      },
      error: (err) => {
        console.log('POST character error');
        console.log(err);
      }
    });
  }

//POST NEW CHARACTERS
$('#new-character-form').on('submit',(event) => {
  event.preventDefault();

  const characterInfo = {
    name:         $('#the-name-input').val(),
    occupation:   $('#the-occupation-input').val(),
    weapon:       $('#the-weapon-input').val()
};
console.log(characterInfo);
postCharacter(characterInfo);
});


//UPDATE CHARACTER
$('#edit-character-form').submit((event) => {
  event.preventDefault();

const charId = $('#character-id-input').val();
const updateInfo = {
  name:         $('#update-name-input').val(),
  occupation:   $('#update-occupation-input').val(),
  weapon:       $('#update-weapon-input').val()
};
console.log(charId);
updateCharacter(charId, updateInfo);
});

function updateCharacter (id, charInfo) {
const charId = id;
  console.log(id);
  $.ajax({
    url: `https://ih-api.herokuapp.com/characters/${charId}`,
    method: 'PUT',
    data:charInfo,
    success: (data) => {
      // console.log(`PUT ${results.name} success!`);
      console.log(data);

      $('#edit-character-form').trigger('reset');
      // $('#feedback').html(`
      //   ${results.name} (id ${result.id}) was updated successfully.
      //   `);
    },
    error: (err) => {
      console.log('POST character error');
      console.log(err);
    }
  });
}

function getInfo (id) {
  $.ajax({
    url: `https://ih-api.herokuapp.com/characters/${id}`,
    method: 'GET',
    success: (data) => {
        console.log(data);
        $('.characters-container').empty();
        $('.characters-container').append(`<div class="character-info">
          <div class="name">${data.name}</div>
          <div class="occupation">${data.occupation}</div>
          <div class="debt">${data.debt}</div>
          <div class="weapon">${data.weapon}</div>
          <div class="id">${data.id}</div>
        </div>
          `);
    },
    error: (err) => {
        console.log('GET fetch-id error');
        console.log(err);
    }
  });
}



});
