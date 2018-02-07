const charactersAPI = new APIHandler("http://localhost:8000");

window.onload = () => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(res => {
        $(".characters-container").empty();
        res.forEach(element => {
          $(".characters-container").append(
            `<div class="character-info">
              <div class="id">Id : ${element.id}</div>
              <div class="name">Name : ${element.name}</div>
              <div class="occupation">Occupation : ${element.occupation}</div>
              <div class="debt">Debt : ${element.debt}</div>
              <div class="weapon">Weapon : ${element.weapon}</div>
            </div>`
          );
        });
      })
      .catch(err => console.error(err));
  };

  document.getElementById("fetch-one").onclick = function() {
    let characterId = $("#charId").val();
    console.log(characterId);
    charactersAPI
      .getOneRegister(characterId)
      .then(res => {
        $(".characters-container").empty();
        $(".characters-container").append(
          `<div class="character-info">
            <div class="id">Id : ${res.id}</div>
            <div class="name">Name : ${res.name}</div>
            <div class="occupation">Occupation : ${res.occupation}</div>
            <div class="debt">Debt : ${res.debt}</div>
            <div class="weapon">Weapon : ${res.weapon}</div>
          </div>`
        );
      })
      .catch(err => console.error(err));
  };

  document.getElementById("delete-one").onclick = function() {
    event.preventDefault();
    let characterId = $("#deleteCharId").val();
    //console.log(characterId);
    charactersAPI.deleteOneRegister(characterId);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();
    const updateInfo = {
      name: $("#update-name-input").val(),
      occupation: $("#update-occupation-input").val(),
      weapon: $("#update-weapon-input").val(),
      deb: $("update-debt-input").val()
    };
    const charId = $("#chr-id").val();
    charactersAPI.updateOneRegister(charId, updateInfo);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    let characterName = $(".createName").val();
    let characterOccupation = $(".createOccupation").val();
    let characterWeapon = $(".createWeapon").val();
    let characterDebt = $(".createDebt").val();

    const arrayCreate = {
      name: characterName,
      occupation: characterOccupation,
      weapon: characterWeapon,
      debt: characterDebt
    };
    charactersAPI
      .createOneRegister(arrayCreate)
      .then()
      .catch();
  };
};
