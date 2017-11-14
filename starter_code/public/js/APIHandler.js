class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "GET",
      success: function (response) {
        console.log(response);
        paintingCharacters(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  getOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+ id,
      method: "GET",
      success: function (response) {
        console.log(response);
        paintingCharacters(response);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  createOneRegister (info) {
    document.getElementById("new-character-form").reset();
    $.ajax({
      url: this.BASE_URL+"/characters",
      method: "POST",
      data: info,
      succes:function (response) {
        console.log("Inserted");
        $(".submit-button").css({"background-color":"green"});
      },
      error: function (err) {
        console.log("FAIL");
        $(".submit-button").css({"background-color":"red"});
      },
    });
  }

  updateOneRegister (id, info) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "PATCH",
      data: info,
      succes:function (response) {
        console.log("Updated");
      },
      error: function (err) {
        console.log("There were an error while updating");
      },
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url: this.BASE_URL+"/characters/"+id,
      method: "DELETE",
      succes:function (response) {
        console.log("Deleted");
      },
      error: function (err) {
        console.log("There were an error while deleting");
      },
    });
  }

}

function paintingCharacters (response){
  let container = $(".character-info");
  $('.character-info').remove();
  let name, occupation, debt, weapon;
  let html = '';
  if (response.length > 1) {
    for (let i=0; i < response.length; i++){

      name = response[i].name;
      occupation = response[i].occupation;
      debt = response[i].debt;
      weapon = response[i].weapon;
      html += '<div class= "character-info">';
      html += '<div class= "name">' + name + '</div>';
      html += '<div class= "occupation">' + occupation + '</div>';
      html += '<div class= "debt">' + debt + '</div>';
      html += '<div class= "weapon">' + weapon + '</div>';
      html += '</div>';
      document.querySelector('.characters-container').innerHTML =html;
    }
  }
  else {
    let html = '';
    name = response.name;
    occupation = response.occupation;
    debt = response.debt;
    weapon = response.weapon;
    html += '<div class= "character-info">';
    html += '<div class= "name">' + name + '</div>';
    html += '<div class= "occupation">' + occupation + '</div>';
    html += '<div class= "debt">' + debt + '</div>';
    html += '<div class= "weapon">' + weapon + '</div>';
    html += '</div>';
    document.querySelector('.characters-container').innerHTML =html;
  }
}
