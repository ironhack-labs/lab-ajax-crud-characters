const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    const characterId = document.querySelector("input[name=character-id").value;
    charactersAPI.getOneRegister(characterId);
  };

  document.getElementById("delete-one").onclick = function() {
    const characterId = document.querySelector("input[name=character-id-delete")
      .value;
    charactersAPI.deleteOneRegister(characterId);
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    let cartoonCheck = document.querySelector("input[name=cartoon-edit");
    let cartoonValue = false;
    if (cartoonCheck.checked) {
      cartoonValue = true;
    }

    let payload = {
      id: document.querySelector("input[name=chr-id").value,
      name: document.querySelector("input[name=name-edit").value,
      occupation: document.querySelector("input[name=occupation-edit").value,
      weapon: document.querySelector("input[name=weapon-edit").value,
      cartoon: cartoonValue
    };
    charactersAPI.updateOneRegister(payload);
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    let cartoonCheck = document.querySelector("input[type=checkbox");
    let cartoonValue = false;
    if (cartoonCheck.checked) {
      cartoonValue = true;
    }

    let payload = {
      name: document.querySelector("input[name=name").value,
      occupation: document.querySelector("input[name=occupation").value,
      weapon: document.querySelector("input[name=weapon").value,
      cartoon: cartoonValue
    };
    charactersAPI.createOneRegister(payload);
  };
});
