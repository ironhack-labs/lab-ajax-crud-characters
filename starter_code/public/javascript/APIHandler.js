class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    $.ajax({
      url:  "http://ih-crud-api.herokuapp.com/characters",
      method: 'GET',
      success: function (response) {
        console.log(response);
        createDom(response);
      },
      error: function (err) {
        console.log("Hubo un error!");
      },
    });
  }


getOneRegister (id) {
  $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters/"+id,
      success: function (response) {
        createDom(response);
    },
    error: function (err) {
    },
  });
}

  createOneRegister (newChar) {
    $.ajax({
      url:  "http://ih-crud-api.herokuapp.com/characters",
      method: 'POST',
      data: newChar,
      success: function (response) {
        console.log("your user have been created");
        $('#btn-create').css("background-color", "green");
        },
      error: function (err) {
        console.log("Hubo un error!");
      },
    });
  }

  updateOneRegister (id, newChar) {
    $.ajax({
      url: "http://ih-crud-api.herokuapp.com/characters/"+id,
      method: 'PUT',
      data: newChar,
      success: function (response) {
        console.log("Your user have been updated");
        $('#btn-update').css("background-color", "green");
        },
      error: function (err) {
        console.log("Hubo un error!");
      },
    });
  }

  deleteOneRegister (id) {
    $.ajax({
      url:  "http://ih-crud-api.herokuapp.com/characters/"+id,
      method: 'DELETE',
      success: function (response) {
        console.log(response);
        if(response){
          $("#is-deleted").html("Your character have been deleted!");
        } else {
          $("#is-deleted").html("Ops! The characters is not exist");
        }
      },
      error: function (err) {
        console.log("Hubo un error!");
      },
    });
  }
}

const createDom = (response) => {
  let template = $('#template').html();
  const holder = $('.characters-container');
  $('.character-info').remove();

  if(response.length > 1) {
    response.forEach(e => {
      let nodo = $(template);
      let name = nodo.find(".name");
      let occupation = nodo.find(".occupation");
      let debt = nodo.find(".debt");
      let weapon = nodo.find(".weapon");

      name.html("Name: " + e.name);
      occupation.html("Occupation: " + e.occupation);
      debt.html("Debt: " + e.debt);
      weapon.html("Weapon: " + e.weapon);
      holder.append(nodo);
    });
  } else {
    let nodo = $(template);
    let name = nodo.find(".name");
    let occupation = nodo.find(".occupation");
    let debt = nodo.find(".debt");
    let weapon = nodo.find(".weapon");

    name.html("Name: " + response.name);
    occupation.html("Occupation: " + response.occupation);
    debt.html("Debt: " + response.debt);
    weapon.html("Weapon: " + response.weapon);
    holder.append(nodo);
  }
};
