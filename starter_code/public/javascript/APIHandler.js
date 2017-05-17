class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }



  getFullList () {
    $.ajax({
      url: this.BASE_URL + `/characters/`,
      method: 'GET',
      success: (result)=>{
        $('.characters-container').empty();

        result.forEach( oneChar => {
          const bluePrient = `<div class="character-info">
            <div class="id">ID:  ${oneChar.id}</div>
            <div class="name">Name:  ${oneChar.name}</div>
            <div class="occupation">Occupation:  ${oneChar.occupation}</div>
            <div class="debt">Debt:  ${oneChar.debt}</div>
            <div class="weapon">Weapon:  ${oneChar.weapon}</div>
            </div>`;

            $('.characters-container').append(bluePrient);

        });

        $('.message').html(`Successfull search`);

      },
      error: (err)=>{
        console.log(err);
      }

    });
  }

  getOneRegister (id) {

    $.ajax({
      url: this.BASE_URL + `/characters/${id}`,
      method: 'GET',
      success: (result)=>{
        const bluePrient = `<div class="character-info">
          <div class="name">ID:  ${result.id}</div>
          <div class="name">Name:  ${result.name}</div>
          <div class="occupation">Occupation:  ${result.occupation}</div>
          <div class="debt">Debt:  ${result.debt}</div>
          <div class="weapon">Weapon:  ${result.weapon}</div>
          </div>`;

        $('.characters-container').empty();
        $('.characters-container').append(bluePrient);
        $('#character-id').val('');
        $('.message').html(`Successfull search`);
      },
      error: (err)=>{
        $('.message').html(err.statusText);
        $('#character-id').val('');
        console.log(err);
      }

    });
  }

  createOneRegister () {

    const newChar = {
      name: $('#name-input').val(),
      occupation: $('#occupation-input').val(),
      weapon: $('#weapon-input').val(),
      debt: $('#debt-input').prop('checked'),
    };

    $.ajax({
      url: this.BASE_URL + `/characters/`,
      method: 'POST',
      data: newChar,
      success: (result)=>{
        console.log(result);
        $('.message').html(`${result.name} (id = ${result.id}) - created`);
        $('#new-character-form').trigger('reset');
      },
      error: (err)=>{
        console.log(err);
      }

    });
  }

  updateOneRegister (id) {
    const updatedChar = {
      name: $('#name-edit').val(),
      occupation: $('#occupation-edit').val(),
      weapon: $('#weapon-edit').val(),
      debt: $('#debt-edit').prop('checked'),
    };

    $.ajax({
      url: this.BASE_URL + `/characters/${id}`,
      method: 'PUT',
      data: updatedChar,
      success: (result)=>{
        console.log(result);
        $('.message').html(`${result.id} - upadated`);
        $('#edit-character-form').trigger('reset');
      },
      error: (err)=>{
        $('.message').html(err.statusText);

        console.log(err);
      }

    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: this.BASE_URL + `/characters/${id}`,
      method: 'DELETE',
      success: (result)=>{
        console.log(result);
        $('.message').html(result);
        $('#character-id-delete').val('');
      },
      error: (err)=>{
        $('.message').html(err.statusText);
        $('#character-id-delete').val('');
        console.log(err);
      }
    });
  }
}
