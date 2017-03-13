class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters/',
      method: 'GET',
      success: (response) => {

        response.forEach((eachObj, index) => {
          $('.characters-container').append(`
          <div class="character-info">
            <div class="name">${eachObj.name} id:${eachObj.id}</div>
            <div class="occupation">${eachObj.occupation}</div>
            <div class="debt">${eachObj.debt}</div>
            <div class="weapon">${eachObj.weapon}</div>
          </div>
          `);
        });

      },
      error: (err) => {
        console.log('GET ALL error');
        console.log(err);
      }
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: 'GET',
      success: (response) => {
        console.log(response);

        $('.characters-container').append(`
          <div class="character-info">
          <div class="name">Name: ${response.name}</div>
          <div class="occupation">Occupation: ${response.occupation}</div>
          <div class="debt">Debt: ${response.debt}</div>
          <div class="weapon">Weapon: ${response.weapon}</div>
          </div>
        `);

      },
      error: (err) => {

        console.log('GET ONE error');
        console.log(err);

        if (err.statusText === "Not Found") {
          $('.characters-container').append(`
            <div class="character-info">
              <div class="name">Sorry, we couldn't find the thing.</div>
            </div>
            `);
          }


      }
    });

  }





  createOneRegister (newCharInfo) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/`,
      method: 'POST',
      data: newCharInfo,
      success: (response) => {
        console.log(response + "CREATE");

        $('.characters-container').append(`
        <div class="character-info">
          <div class="name"> Creation of ${response.name} was successful!</div>
        </div>
        `);

        $('#new-character-form').trigger('reset');
      },
      error: (err) => {
        console.log('CREATE ONE error');
        console.log(err);
      }
    });
  }





  updateOneRegister (charUpdate) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${charUpdate.id}`,
      method: 'PATCH',
      data: charUpdate,
      success: (response) => {
        console.log(response + "PATCH");

        $('.characters-container').append(`
        <div class="character-info">
          <div class="name"> Update of ${response.name} successful!</div>
        </div>
        `);

      },
      error: (err) => {
        console.log('UPDATE ONE error');
        console.log(err);
      }
    });
  }





  deleteOneRegister (id) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: 'DELETE',
      success: (response) => {
        console.log(response + "DELETE");

        $('.characters-container').append(`
        <div class="character-info">
          <div class="name"> Deletion successful!</div>
        </div>
        `);

      },
      error: (err) => {
        console.log('DELETE ONE error');
        console.log(err);
      }
    });

  }
}
