const charactersAPI = new APIHandler("http://ih-api.herokuapp.com");

$(document).ready( () => {
  $('#fetch-all').on('click', (e) => {
    charactersAPI.getFullList().then(response => {
      $(".characters-container").empty();
      let newCharac = $("<div>")
        .addClass(".characters-container");
      $(".container").append(newCharac);
      response.forEach(e => {
        newCharac.append(`Name: ${e.name} <br>Occupation: ${e.occupation} <br>Debt: ${e.debt} <br>Weapon: ${e.weapon}`);
        console.log(e);
      });
    });
  });

  $('#fetch-one').on('click', (e) => {
    charactersAPI.getOneRegister().then(response => {
    console.log(response);
    });
});
  $('#delete-one').on('click', (e) => {
    charactersAPI.deleteOneRegister();
  });

  $('#edit-character-form').on('submit', (e) => {
    charactersAPI.updateOneRegister();
  });

  $('#new-character-form').on('submit', (e) => {
    charactersAPI.createOneRegister();
  });
});
