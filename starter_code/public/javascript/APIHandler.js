class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'GET',
      success: (data) => {

        data.forEach( (character) => {
          $('.character-info').append(`
            <div class="character-info-container">
            <div class="name"><b> Name:</b> ${character.name}</div>
            <div class="occupation"><b> Occupation:</b> ${character.occupation}</div>
            <div class="debt"> <b> Debt:</b> ${character.debt}</div>
            <div class="weapon"><b> Weapon:</b> ${character.weapon}</div>
            <div class="id"><b> ID:</b> ${character.id}</div>
            </div>
            `);
        });
      },
      error: (err) => {
        console.log(`POST character error`);
        console.log(err);
      }
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}/`,
      method: 'GET',
      success: (character) => {
        $('.character-info').append(`
          <div class="character-info-container">
            <div class="name"><b> Name:</b> ${character.name}</div>
            <div class="occupation"><b> Occupation:</b> ${character.occupation}</div>
            <div class="debt"> <b> Debt:</b> ${character.debt}</div>
            <div class="weapon"><b> Weapon:</b> ${character.weapon}</div>
            <div class="id"><b> ID:</b> ${character.id}</div>
          </div>
          `);

      },
      error: (err) => {
        $('.character-info').append(`
          <div class="error">Can't find a character</div>
          </div>
          `);
      }
    });
  }

  createOneRegister (characterInfo) {
    $.ajax({
      url: "https://ih-api.herokuapp.com/characters",
      method: 'POST',
      data: characterInfo,
      success: (data) => {
        console.log(`${data.name} was created`);
      $('#new-character-form').trigger('reset');
      $('.character-info').append(`
        <div class="character-info-container">
          <div class="creation">${data.name} has been added!</div>
        </div>
        `);
      $('#send-data').css('background-color', 'green');
      },
      error: (err) => {
        console.log(`POST character error`);
        console.log(err);
      }
    });
  }

  updateOneRegister (id, updateInfo) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: 'PUT',
      data: updateInfo,
      success: (data) => {
        $('#update-form').trigger('reset');
        $('.character-info').append(`
          <div class="character-info-container">
            <div class="creation">${data.name} has been updated!</div>
          </div>
          `);
      },
      error: (err) => {
        $('.character-info').append(`
          <div class="character-info-container">
            <div class="error">Something went wrong!</div>
          </div>
          `);
      }
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}/`,
      method: 'DELETE',
      success: (result) => {
        $('.character-info').append(`
          <div class="character-info-container">
            <div class="name">has been deleted!</div>
          </div>
          `);

      },
      error: (err) => {
        $('.character-info').append(`
          <div class="error">Can't find a character</div>
          </div>
          `);
      }
    });
  }
}
