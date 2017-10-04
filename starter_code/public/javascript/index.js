const charactersAPI = new APIHandler("https://ih-crud-api.herokuapp.com");

function characterHtml(char) {
  const newCharacterHtml = `
  <div class="character-info">
    <div class="id">ID: ${char.id} </div>
    <div class="name">NAME: ${char.name} </div>
    <div class="occupation">OCCUPATION: ${char.occupation} </div>
    <div class="debt">DEBT: ${char.debt} </div>
    <div class="weapon">WEAPON: ${char.weapon} </div>
  </div>
`;
  console.log(newCharacterHtml);
  return newCharacterHtml;
}

$(document).ready(() => {
  $("#fetch-all").on("click", e => {
    $(".characters-container").empty();
    charactersAPI.getFullList().then(characters => {
      characters.forEach(character => {
        const block = characterHtml(character);
        $(".characters-container").append(block);
      });
    });
  });

  $("#fetch-one").on("click", e => {
    $(".characters-container").empty();
    charactersAPI.getOneRegister($("#character-id").val()).then(character => {
      $(".characters-container").append(characterHtml(character));
      $("#id").val(character.id);
      $("#name").val(character.name);
      $("#occupation").val(character.occupation);
      $("#debt").val(character.debt);
      $("#weapon").val(character.weapon);
    });
  });

  $("#delete-one").on("click", e => {
    $(".characters-container").empty();
    charactersAPI
      .deleteOneRegister($("#character-id-delete").val())
      .then(character => {
        $(".characters-container").append(characterHtml(character));
      });
  });

  $("#edit-character-form").on("submit", e => {
    event.preventDefault();
    const id = $("#id").val();
    const name = $("#name").val();
    const occupation = $("#occupation").val();
    const debt = $("#debt").val();
    const weapon = $("#weapon").val();

    charactersAPI
      .updateOneRegister(id, name, occupation, debt, weapon)
      .then(() => $(".submit-button-update").css("color", "green"))
      .catch(() => $(".submit-button-update").css("color", "red"));
  });

  $("#new-character-form").on("submit", e => {
    event.preventDefault();
    const name = $("#character-name").val();
    const occupation = $("#character-occupation").val();
    const debt = $("#character-debt").val();
    const weapon = $("#character-weapon").val();
    console.log({ name, occupation, debt, weapon });
    charactersAPI
      .createOneRegister(name, occupation, debt, weapon)
      .then(() => $(".submit-button-creation").css("background-color", "green"))
      .catch(() => $(".submit-button-creation").css("background-color", "red"));
  });
});
