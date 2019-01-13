const charactersAPI = new APIHandler();

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getAllCharacters().then(res => {
      const htmlCharacters = res.data.map(character => {
        return `
        <div class="character-info">
          <div class="name">Id: ${character.id}</div>
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>
        </div>
        `;
      });
      $(".characters-container").html(htmlCharacters);
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI.getSingleCharacter().then(res => {
      const data = res.data;
      $(".characters-container").html(
        `<div class="character-info">
        <div class="name">Id: ${data.id}</div>
        <div class="name">Name: ${data.name}</div>
        <div class="occupation">Occupation: ${data.occupation}</div>
        <div class="weapon">Weapon: ${data.weapon}</div>
      </div>
      `
      );
    });
  };

  document.getElementById("delete-one").onclick = function() {
    charactersAPI
      .deleteCharacter()
      .then(res => {
        $("#delete-one").css("background-color", "green");
      })
      .catch(err => {
        console.log(err);
        $("#delete-one").css("background-color", "red");
      });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const id = $("#edit-character-form")
      .find('[name="chr-id"]')
      .val();
    const name = $("#edit-character-form")
      .find('[name="name"]')
      .val();
    const occupation = $("#edit-character-form")
      .find('[name="occupation"]')
      .val();
    const weapon = $("#edit-character-form")
      .find('[name="weapon"]')
      .val();
    const cartoon = $("#edit-character-form")
      .find('[name="cartoon"]')
      .val();

    charactersAPI.editCharacter(name, occupation, weapon, cartoon);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    const name = $("#new-character-form")
      .find('[name="name"]')
      .val();
    const occupation = $("#new-character-form")
      .find('[name="occupation"]')
      .val();
    const weapon = $("#new-character-form")
      .find('[name="weapon"]')
      .val();
    const cartoon = $("#new-character-form")
      .find('[name="cartoon"]')
      .val();

    charactersAPI
      .createCharacter(name, occupation, weapon, cartoon)
      .then(() => {
        console.log("this worked");
      });
  };
});
