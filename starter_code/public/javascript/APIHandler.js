class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/`,
      method: 'GET',
      success: (data)=>{
        console.log(`GET fetch all characters success`);
        console.log(data);

        $('.characters-container').empty();
        data.forEach((oneCharacter)=>{
          $('.characters-container').append(`<div class="character-info">
            <div class="name">Character Name <span>${oneCharacter.name}</span></div>
            <div class="occupation">Character Occupation <span>${oneCharacter.occupation}</span></div>
            <div class="debt">Character Debt <span>${oneCharacter.debt}</span></div>
            <div class="weapon">Character Weapon <span>${oneCharacter.weapon}</span></div>
          </div>`);

        });
      },
      error: (err)=>{
        console.log(`GET fetch all characters error`);
        console.log(err);
      }
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: 'GET',
      success: (data)=>{
        console.log(`GET ${data.name} success`);
        console.log(data);

        $('.characters-container').empty();
        $('.characters-container').append(`<div class="character-info">
          <div class="name">Character Name <span>${data.name}</span></div>
          <div class="occupation">Character Occupation <span>${data.occupation}</span></div>
          <div class="debt">Character Debt <span>${data.debt}</span></div>
          <div class="weapon">Character Weapon <span>${data.weapon}</span></div>
        </div>`);
      },
      error: (err)=>{
        console.log(`GET ${data.name} error`);
        console.log(err);
      }
    });

  }

  createOneRegister (charInfo) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/`,
      method: 'POST',
      data: charInfo,
      success: (data)=>{
        console.log(`POST ${data.name} success`);
        console.log(data);

        $('#new-character-form').trigger('reset');
        $('.create-button').removeClass('error');
        $('.create-button').toggleClass('success');

      },
      error: (err)=>{
        console.log(`POST character error`);
        console.log(err);

        $('.create-button').removeClass('success');
        $('.create-button').toggleClass('error');
      }
    });
  }

  updateOneRegister (id, updateInfo) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: 'PUT',
      data: updateInfo,
      success: (data)=>{
        console.log(`PUT ${data.name} (id ${data.id}) has been updated successfully`);
        console.log(data);

        $('#edit-character-form').trigger('reset');
        $('.update-button').removeClass('error');
        $('.update-button').toggleClass('success');

      },
      error: (err)=>{
        console.log(`PUT error`);
        console.log(err);

        $('.update-button').removeClass('success');
        $('.update-button').toggleClass('error');

      }
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: `https://ih-api.herokuapp.com/characters/${id}`,
      method: 'DELETE',
      success: (data)=>{
        console.log(`DELETE ${data.name} (id ${data.id}) successful`);
        console.log(data);

        $('#delete-one').removeClass('error');
        $('#delete-one').toggleClass('success');

      },
      error: (err)=>{
        console.log("DELETE error");
        console.log(err);

        $('#delete-one').removeClass('success');
        $('#delete-one').toggleClass('error');
      }
    });
  }
}
