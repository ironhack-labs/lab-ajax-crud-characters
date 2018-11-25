const charactersAPI = new APIHandler("http://localhost:8000/characters");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    let inputVal = document.getElementById("searchInputVal").value;
    if (inputVal == "") {
      console.log("Cannot post empty fields on API");
    } else {
      charactersAPI.getOneRegister(inputVal);
    }
  };

  document.getElementById("delete-one").onclick = function() {
    let inputVal = document.getElementById("deleteInputVal").value;
    if (inputVal == "") {
      console.log("Cannot post empty fields on API");
    } else {
      charactersAPI.deleteOneRegister(inputVal);
    }
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    event.preventDefault();

    const updateInfo = {
      name: document.getElementById("nameUpdate").value,
      occupation: document.getElementById("occupUpdate").value,
      weapon: document.getElementById("weaponUpdate").value,
      cartoon: document.getElementById("cartoonUpdate").value
    };
    if (updateInfo.cartoon == "on") {
      updateInfo.cartoon = true;
    } else {
      updateInfo.cartoon = false;
    }
    const charId = document.getElementById("idUpdate").value;

    if (charId == "") {
      console.log("Cannot post empty fields on API");
    } else {
      charactersAPI.updateOneRegister(updateInfo, charId);
    }
  };

  document.getElementById("new-character-form").onsubmit = function() {
    event.preventDefault();
    const newCharInfo = {
      name: document.getElementById("newName").value,
      occupation: document.getElementById("newOccupation").value,
      weapon: document.getElementById("newWeapon").value,
      cartoon: document.getElementById("newCartoon").value
    };
    if (newCharInfo.cartoon == "on") {
      newCharInfo.cartoon = true;
    } else {
      newCharInfo.cartoon = false;
    }

    if (
      newCharInfo.name == "" ||
      newCharInfo.occupation == "" ||
      newCharInfo.weapon == ""
    ) {
      console.log("Cannot post empty fields on API");
    } else {
      charactersAPI.createOneRegister(newCharInfo);
    }
  };
});
