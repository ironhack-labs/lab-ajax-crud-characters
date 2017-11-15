const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {
  function addCharacter(char) {
    $(".caracters-container").html("Hello <b>world!</b>");
  }

  $("#fetch-all").on("click", e => {
    charactersAPI.getFullList(response => {
      console.log(response.data);
      $(".characters-container").empty();
      response.data.forEach(character => {
        addCharacter(character);
      });
    });
  });

  $("#fetch-one").on("click", e => {
    charactersAPI.getOneRegister(response => {
      console.log(response.data);
    });
  });

  $("#delete-one").on("click", e => {
    charactersAPI.deleteOneRegister(response => {
      console.log(response.data);
    });
  });

  $("#edit-character-form").on("submit", e => {
    charactersAPI.updateOneRegister();
  });

  $("#new-character-form").on("submit", e => {
    charactersAPI.createOneRegister(response => {
      console.log(response.data);
    });
  });
});

{
  /* <div class="character-info">
<div class="name">ID: ${char.id}</div>
<div class="name">Name : ${char.name}</div>
<div class="occupation">Occupation: ${char.occupation}</div>
<div class="debt">Character Debt</div>
<div class="weapon">Weapon: ${char.weapon}</div>
</div> */
}
