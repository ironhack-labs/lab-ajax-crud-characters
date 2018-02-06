const charactersAPI = new APIHandler("http://localhost:8000");

window.onload = () => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI
      .getFullList()
      .then(res => {
        console.log(res);
        $(".characters-container").empty();
        res.forEach(element => {
          $(".characters-container").append(
            `<div class="character-info">
            <div class="Id">Id: ${element.id}</div>
          <div class="name">Name: ${element.name}</div>
          <div class="occupation">Occupation: ${element.occupation}</div>
          <div class="debt">Debt: ${element.debt}</div>
          <div class="weapon">Weapon: ${element.weapon}</div> 
          </div>`
          );
        });
      })
      .catch();
  };

  document.getElementById("fetch-one").onclick = function() {
    const characterId = $(".charID").val();
    console.log(characterId);
    charactersAPI
      .getOneRegister(characterId)
      .then(res => {
        $(".characters-container").empty();
        $(".characters-container").append(
          `<div class="character-info">
          <div class="Id">Id: ${res.id}</div>
        <div class="name">Name: ${res.name}</div>
        <div class="occupation">Occupation: ${res.occupation}</div>
        <div class="debt">Debt: ${res.debt}</div>
        <div class="weapon">Weapon: ${res.weapon}</div> 
        </div>`
        );
      })
      .catch();
  };

  document.getElementById("delete-one").onclick = function() {
    const characterId = $(".charDelete").val();
    console.log(characterId);
    charactersAPI
      .deleteOneRegister(characterId)
      .then($("#delete-one").css("background-color", "#208c3d"))
      .catch($("#delete-one").css("background-color", "red"));
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const characterId = $(".editChar").val();
    const editCharacter = {
      name: $(".editName").val(),
      occupation: $(".editOccupation").val(),
      weapon: $(".editWeapon").val(),
      debt: $(".editDebt").val()
    };
    charactersAPI
      .updateOneRegister(characterId, editCharacter)
      .then()
      .catch();
  };

  document.getElementById("new-character-form").onsubmit = function() {
    const newCharacter = {
      name: $(".newName").val(),
      occupation: $(".newOccupation").val(),
      weapon: $(".newWeapon").val(),
      debt: $(".newDebt").val()
    };
    charactersAPI
      .createOneRegister(newCharacter)
      .then()
      .catch();
  };
};
