console.log('Page is ready');

class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList(){
    $.ajax({
      url: this.BASE_URL +'/characters/',
      method: 'GET',

      success: (responseFromApi)=> {
        console.log('It WorkS! 💪🏽');
        console.log(responseFromApi);


          responseFromApi.forEach((oneObject)=>{
            $('.characters-container').append(`
               <div class="character-info">
                 <div class="name"> Character Name: ${oneObject.name}</div>
                 <div class="occupation"> Character Occupation: ${oneObject.occupation}</div>
                 <div class="debt"> Character Debt: ${oneObject.debt} </div>
                 <div class="weapon"> Character Weapon: ${oneObject.weapon} </div>
               </div>

               `);
          });
      },

      error: (errorFromApi)=> {
        console.log('Nope, Try Again!');
        console.log(errorFromApi);
      }
    });
  }


  getOneRegister(myId) {
    $.ajax({
      url: this.BASE_URL + '/characters/' + myId,
      method: 'GET',

      success: (responseFromApi)=> {
        console.log('GOT ONE!');
        console.log(responseFromApi);

          $('.characters-container').html(`
             <div class="character-info">
               <div class="name"> Character Name: ${responseFromApi.name}</div>
               <div class="occupation"> Character Occupation: ${responseFromApi.occupation}</div>
               <div class="debt"> Character Debt: ${responseFromApi.debt} </div>
               <div class="weapon"> Character Weapon: ${responseFromApi.weapon} </div>
             </div>
             `);


      },

      error: (errorFromApi)=> {
        console.log('Nope, Try Again!');
        console.log(errorFromApi);
      }
    });

  }

  createOneRegister (newCharacterDetails) {
    $.ajax({
      url: this.BASE_URL + '/characters/',
      method: 'POST',

      data: newCharacterDetails,

      success: (responseFromApi)=> {
        console.log('Added Succesfully!');
        console.log(responseFromApi);
        $("#send-data").css("background-color", "green");
      },

      error: (errorFromApi)=> {
        console.log('Nope, Try Again!');
        console.log(errorFromApi);
        $("#send-data").css("background-color", "red");
      }
    });

  }

  updateOneRegister (myId, updatedInfo) {
    $.ajax({
      url: this.BASE_URL + '/characters/' + myId,
      method: 'PATCH',

      data: updatedInfo,

      success: (responseFromApi)=> {
        console.log('Updated that FOOL Succesfully!');
        console.log(responseFromApi);
        $("#update-data").css("background-color", "green");
      },

      error: (errorFromApi)=> {
        console.log('Nope, Try Again!');
        console.log(errorFromApi);
        $("#update-data").css("background-color", "green");
      }
    });

  }

  deleteOneRegister (myId) {
    $.ajax({
      url:this.BASE_URL + '/characters/' + myId,
      method: 'DELETE',

      success: (responseFromApi)=> {
        console.log('Deleted that FOOL Succesfully!');
        console.log(responseFromApi);

        $("#delete-one").css("background-color", "green");
      },

      error: (errorFromApi)=> {
        console.log('Nope, Try Again!');
        console.log(errorFromApi);

        $("#delete-one").css("background-color", "red");
      }
    });

  }
}
