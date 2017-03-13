class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL       = 'https://ih-api.herokuapp.com/characters/';
  }

  getFullList () {
    for (let i = 1; i < 11; i ++) {
      $.ajax({
        url:            `${charactersAPI.BASE_URL}${i}`,
        method:         `GET`,
        success:        (data) => {
          console.log(`Success: `);
          console.log(`${data.name}`);
          $('#characters-container').append(`
            <div class="character-info" id="character-info">
              <div class="name">Name: ${data.name}</div>
              <div class="occupation">Occupation: ${data.occupation}</div>
              <div class="debt">Debt: ${data.debt}</div>
              <div class="weapon">Weapon: ${data.weapon}</div>
            </div>
            `);
        },
        error:          (err) => {
          console.log(`Failure: `);
        }
      });
    }
  }

  getOneRegister (id) {
    const charId      = id;
    console.log(`charId ${id}`);
    $('#characters-container').empty();
    $.ajax({
      url:            `${charactersAPI.BASE_URL}${charId}`,
      method:         `GET`,
      success:        (data) => {
        console.log(`Success: ${data.id}`);
        $('#characters-container').append(`
          <div class="character-info" id="character-info">
            <div class="name">Name: ${data.name}</div>
            <div class="occupation">Occupation: ${data.occupation}</div>
            <div class="debt">Debt: ${data.debt}</div>
            <div class="weapon">Weapon: ${data.weapon}</div>
          </div>
          `);

      },
      error:          (err) => {
        console.log(`Error: ${err}`);
      }

    });

  }

  createOneRegister (info) {
    $('#characters-container').empty();
    const charInfo    = info;
    console.log(`Create Info: ${charInfo.name}`);
    $.ajax({
      url:            `${charactersAPI.BASE_URL}`,
      method:         'POST',
      data:           charInfo,
      success:        (data) => {
        console.log(`Create Success: ${data}`);
      },
      error:          (err) => {
        console.log(`Create Error: ${err}`);
        console.log(err);
        console.log(charInfo);
      }
    });
  }

  updateOneRegister (id, info) {
    const charId        = id;
    const charInfo      = info;
    console.log(charId);
    console.log(charInfo);
    $.ajax({
      url:                `${charactersAPI.BASE_URL}${charId}`,
      method:             'PUT',
      data:               charInfo,
      success:            (data) => {
        console.log(`Update Success`);
        console.log(data);
      },
      error:              (err) => {
        console.log(`Update Error`);
        console.log(err);
      }
    });
  }

  deleteOneRegister (id) {
    const charId        = id;
    $.ajax({
      url:                `${charactersAPI.BASE_URL}${charId}`,
      method:             `DELETE`,
      success:            (data) => {
        console.log(`Successfully deleted ID: ${charId}`);
      },
      error:              (err) => {
        console.log(`There was an error.`);
        console.log(err);
      }
    });

  }
}
