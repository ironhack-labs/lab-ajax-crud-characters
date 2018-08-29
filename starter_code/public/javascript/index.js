const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(response => {
      $(".all-characters").text("");
      response.data.forEach(character => {
        $(".all-characters").append(getCard(character));
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    //TODO: validate
    const id = $("#fetch-one")
      .prev()
      .val();

    $(".all-characters").text("");

    charactersAPI.getOneRegister(id).then(response => {
      console.log(response);

      $(".all-characters").append(getCard(response.data));
    });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = $("#delete-one")
      .prev()
      .val();

    $(".all-characters").text("");
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();

    const inputs = $("#new-character-form :input");
    let values = {};
    $.each($("#new-character-form").serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    //TODO: validate form data

    charactersAPI.createOneRegister(values);
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();

    const inputs = $("#edit-character-form :input");
    let values = {};
    $.each($("#edit-character-form").serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    charactersAPI.updateOneRegister(values);
  };
});

function getCard(character) {
  return `<div class='character-card'><p><span>Id:</span> ${
    character.id
  }</p><p><span>Name:</span> ${character.name}</p><p><span>Occupation:</span> ${
    character.occupation
  }</p><p><span>Is it a cartoon?</span> ${
    character.cartoon
  }</p><p><span>Weapon:</span> ${character.weapon}</p></div>`;
}
