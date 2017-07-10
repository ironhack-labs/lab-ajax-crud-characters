class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
    console.log(this.BASE_URL);
  }

  getFullList () {

    $.ajax({
      url: this.BASE_URL + '/characters/',
      method: 'GET',
      success: (response) =>{
        $(".characters-container").empty();

        response.forEach((character)=>{
          $(".characters-container").append(`
            <div class="character-info">
              <div class="id">id: ${character.id}</div>
              <div class="name">Character Name: ${character.name}</div>
              <div class="occupation">Character Occupation: ${character.occupation}</div>
              <div class="debt">Character Debt: ${character.dept}</div>
              <div class="weapon">Character Weapon: ${character.weapon}</div>
            </div>
            `);

        });

      },
      error: (error) =>{
        alert('getFullList Error');
        console.log(error);
      }

    });

  }

  getOneRegister (id) {

    $.ajax({
      url: this.BASE_URL + '/characters/' + id +"/",
      method: 'GET',
      success: (response) =>{

        $(".characters-container").html(`
          <div class="character-info">
            <div class="id">id: ${response.id}</div>
            <div class="name">Character Name: ${response.name}</div>
            <div class="occupation">Character Occupation: ${response.occupation}</div>
            <div class="debt">Character Debt: ${response.dept}</div>
            <div class="weapon">Character Weapon: ${response.weapon}</div>
          </div>
          `);
      },
      error: (error) =>{
        alert('getOne Error');
        console.log(error);
      }

    });

  }

  createOneRegister (newData) {

    $.ajax({
      url: this.BASE_URL + '/characters/',
      method: 'POST',
      data: newData,
      success: (response) =>{
        console.log("createOne returns: ");
        console.log(response);
        return response;
      },
      error: (error) =>{
        alert('createOne Error');
        console.log(error);
      }

    });

  }

  updateOneRegister (id,dataToUpdate) {

    $.ajax({
      url: this.BASE_URL + '/characters/' + id,
      method: 'PATCH',
      data: dataToUpdate,
      success: (response) =>{
        console.log("update returns: ");
        console.log(response);
        return response;
      },
      error: (error) =>{
        alert('update Error');
        console.log(error);
      }

    });

  }

  deleteOneRegister (id) {

    $.ajax({
      url: this.BASE_URL + '/characters/'+id +'/',
      method: 'DELETE',
      success: (response) =>{
        console.log("deleteOne returns: ");
        console.log(response);
        return response;
      },
      error: (error) =>{
        alert('deleteOne Error');
        console.log(error);
      }

    });

  }
}
