const charactersAPI = new api("http://ih-api.herokuapp.com");

$(document).ready(() => {
  $("#fetch-all").on("click", e => {
    charactersAPI.getFullList();
  });

  $("#fetch-one").on("click", e => {
    charactersAPI.getOne();
  });

  $("#delete-one").on("click", e => {
    charactersAPI.deleteOne();
  });

  $("#edit-character-form").on("submit", e => {
    e.preventDefault();

    const updateCharacterInfo = {
      name: $("input[name=name]").val(),
      occupation: $("input[name=occupation]").val(),
      weapon: $("input[name=weapon]").val(),
      debt: $("input[name=debt]").is(":checked")
    };

    charactersAPI.updateOne(updateCharacterInfo);
  });

  $("#new-character-form").on("submit", e => {
    e.preventDefault();

    const newCharacterInfo = {
      name: $("input[name=newName]").val(),
      occupation: $("input[name=newOccupation]").val(),
      weapon: $("input[name=newWeapon]").val(),
      debt: $("input[name=newDebt]").is(":checked")
    };

    charactersAPI.createOne(newCharacterInfo);
  });
});
