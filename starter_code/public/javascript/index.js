const charactersAPI = new APIHandler("http://localhost:3000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    console.log(charactersAPI.getFullList());
  };

  document.getElementById("fetch-one").onclick = function() {
    const id = document.getElementById("character-id").value;
    console.log(charactersAPI.getOneRegister(id));
  };

  document.getElementById("delete-one").onclick = function() {
    const id = document.getElementById("character-id-delete").value;
    charactersAPI.deleteOneRegister(id);
  };

  document.getElementById("new-character-form").onsubmit = function() {
    let cartoon = "";
    if (document.getElementById("new-char-cartoon") == "on") {
      cartoon = true;
    } else {
      cartoon = false;
    }
    
    const newChar = {
      name: document.getElementById("new-char-name").value,
      occupation: document.getElementById("new-char-occ").value,
      weapon: document.getElementById("new-char-weapon").value,
      cartoon: cartoon
    };

    charactersAPI.createOneRegister(newChar);
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const id = document.getElementById("edit-char-id").value;

    let cartoon = "";
    if (document.getElementById("edit-char-cartoon") == "on") {
      cartoon = true;
    } else {
      cartoon = false;
    }

    const editChar = {
      name: document.getElementById("edit-char-name").value,
      occupation: document.getElementById("edit-char-occ").value,
      weapon: document.getElementById("edit-char-weapon").value,
      cartoon: cartoon
    };

    charactersAPI.updateOneRegister(id, editChar);
  };
});
