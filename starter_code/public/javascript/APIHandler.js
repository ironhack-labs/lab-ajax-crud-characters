class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $('.characters-container').html(`<p>Loading...</p>`);
    $.ajax({
  url: this.BASE_URL+ '/characters/',
  method: 'GET',
  success:(charactersFromApi)=>{
    $('.characters-container').html('');
    charactersFromApi.forEach((oneCharacter)=>{
      $('.characters-container').append(`
        <div class="character-info">
          <div class="id">ID: ${oneCharacter.id}</div>
          <div class="name">Name: ${oneCharacter.name}</div>
          <div class="occupation">Occupation: ${oneCharacter.occupation}</div>
          <div class="debt">Debt: ${oneCharacter.debt}</div>
          <div class="weapon">Weapon: ${oneCharacter.weapon}</div>
        </div>`);
    });
  },
  error:(errorInfo)=>{
    console.log('Update ERROR');
    console.log(errorInfo);
  }
});
  }

  getOneRegister (id) {
    $('.characters-container').html(`<p>Loading...</p>`);
    $.ajax({
  url: this.BASE_URL + '/characters/' + id,
  method: 'GET',
  success:(characterFromApi)=>{
    $('.characters-container').html(`
        <div class="character-info">
          <div class="id">ID: ${characterFromApi.id}</div>
          <div class="name">Name: ${characterFromApi.name}</div>
          <div class="occupation">Occupation: ${characterFromApi.occupation}</div>
          <div class="debt">Debt: ${characterFromApi.debt}</div>
          <div class="weapon">Weapon: ${characterFromApi.weapon}</div>
        </div>`);
  },
  error:(errorInfo)=>{
    console.log('Update ERROR');
    console.log(errorInfo);
  }
});
}

  createOneRegister (newChar) {
    $.ajax({
  url: this.BASE_URL + '/characters/',
  method: 'POST',
  data: newChar,
  success:(characterFromApi)=>{
    $('.characters-container').html(`${characterFromApi.name} was added to the list.`);
  },
  error:(errorInfo)=>{
    console.log('Update ERROR');
    console.log(errorInfo);
  }
});
  }

  updateOneRegister (updateChar, id) {
  $('.characters-container').html(`<p>Loading...</p>`);
$.ajax({
  url: 'https://ih-api.herokuapp.com/characters/' + id,
  method: 'PATCH',
  data:updateChar,
  success:(updatedFromApi)=>{
    $('.characters-container').html(`${updatedFromApi.name} was updated.`);
  },
  error:(errorInfo)=>{
    console.log('Update ERROR');
    console.log(errorInfo);
  }
});
}

deleteOneRegister(id) {
    $('.characters-container').html(`<p>Loading...</p>`);
    $.ajax({
  url: this.BASE_URL + '/characters/' + id,
  method: 'DELETE',
  success:(characterFromApi)=>{
    $('.characters-container').html(`<p>${id} was deleted from the list</p>`);
  },
  error:(errorInfo)=>{
    console.log('Update ERROR');
    console.log(errorInfo);
  }
});
  }
}
