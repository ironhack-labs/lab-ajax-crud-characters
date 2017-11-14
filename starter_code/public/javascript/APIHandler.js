class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList(restUrl) {
    $.ajax({
      url: this.BASE_URL+restUrl,
      method: 'GET',
      success: function (response) {
        removeAndDrawDivs(response);
      },
      error: function (err) {
        console.log("Hubo un error!");
      },
    })
  }

  getOneRegister (id) {
    $.ajax({
        url: this.BASE_URL+"/characters/"+id,
        success: function (response) {
          removeAndDrawDivs(response);
      },
      error: function (err) {

      },
    })
  }
// name, occupation, weapon, debt(checkbox)
  createOneRegister (newChar) {
    document.getElementById("new-character-form").reset();
    $.ajax({
        url: this.BASE_URL+"/characters/",
        method: "POST",
        data: newChar,
        success: function (response) {
          console.log("Inserted");
          $('.submit-button').css("background-color","green");
      },
      error: function (err) {
        console.log("FAIL");
        $('.submit-button').css("background-color","red");
      },
    })
  }

  updateOneRegister (editObj,id) {
      $.ajax({
          url: this.BASE_URL+"/characters/"+id,
          method: 'PATCH',
          data: editObj,
          success: function (response) {
            console.log("Edited!");
        },
        error: function (err) {
          console.log('error');
        },
      })
  }

  deleteOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: 'DELETE',
      success: function (response) {
        console.log(response);
        if (response == "Character has been successfully deleted"){
          $('isRemoved').innerHTML = "ID Removed!";
        } else if (response == "Character not found"){
          $('isRemoved').innerHTML = "ERROR Removing";
        }
      },
      error: function (err) {
        console.log("There was an error!");
      },
    })
  }
}
function removeAndDrawDivs(response){
  let div = document.querySelector('.character-info');
  $('.character-info').remove();
   // true means clone all childNodes and all event handlers
  if (response.length > 1){
    response.forEach(e =>{
      let clone = div.cloneNode(true);
      clone.querySelector('.id').innerHTML = e.id;
      clone.querySelector('.name').innerHTML = e.name;
      clone.querySelector('.occupation').innerHTML = e.occupation;
      clone.querySelector('.weapon').innerHTML = e.weapon;
      clone.querySelector('.debt').innerHTML = e.debt;
      document.querySelector('.characters-container').appendChild(clone);
      });
    } else {
      let clone = div.cloneNode(true);
      clone.querySelector('.id').innerHTML = response.id;
      clone.querySelector('.name').innerHTML = response.name;
      clone.querySelector('.occupation').innerHTML = response.occupation;
      clone.querySelector('.weapon').innerHTML = response.weapon;
      clone.querySelector('.debt').innerHTML = response.debt;
      document.querySelector('.characters-container').appendChild(clone);
    }

}
