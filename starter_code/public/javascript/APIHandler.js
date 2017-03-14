class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {

    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'get',
      success: (data) => {
        data.forEach((char) => {
          const blueprint = `<div class="character-info">
            <div class="name">${char.name}</div>
            <div class="occupation">${char.occupation}</div>
            <div class="debt">${char.debt}</div>
            <div class="weapon">${char.weapon}</div>
            <div class = "ID">${char.id}</div>
          </div>`;
          $('.characters-container').append(blueprint);

        });
      },
      error: (err) => {
        console.log(err);
      }

    });

  }

  getOneRegister (searchID) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${searchID}`,
      method: 'GET',
      data: (searchID),
      success: (data) => {
        console.log(`GET ID SUCCESSFUL ${data.id}`);
        $('#searchID').trigger('reset');
      },
      error: (err) => {
        console.log(err);
      }
    });

  }

  createOneRegister (charInfo) {

    $.ajax({
      url: 'https://ih-api.herokuapp.com/characters',
      method: 'POST',
      data: (charInfo),
      success: (data) => {
        console.log(data);
        console.log(`POST ${data.name}`);
        $(`#new-charecter-form`).trigger('reset');
      },
      error: (err) => {
        console.log(err);
      }


    });

  }

  updateOneRegister (editID, charecterInfo) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${editID}`,
      method: 'PATCH',
      data: (charecterInfo),
      success: (data) => {
        console.log(data);
        console.log(`PATCH ${data.id}`);
        $(`#edit-character-form`).trigger('reset');

        $('#send-data').trigger('reset');
      },
      error: (err) => {
        console.log(err);
      }

    });

  }

  deleteOneRegister () {

  }
}
