const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
    let printChar = $($(".character-info")[0]).clone();
    $(".characters-container").append(printChar);
  };

  document.getElementById("fetch-one").onclick = function(e) {
    let idChar = $(e.target).prev()[0].value;
    charactersAPI.getOneRegister(idChar).then(res => {});
  };

  document.getElementById("delete-one").onclick = function(e) {
    e.preventDefault;
    const charDel = {
      id: document.getElementById("delete").value
    }
    charactersAPI.deleteOneRegister(charDel);
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    const edit = {
      id: document.getElementById("id").value,
      name: document.getElementById("edit-name").value,
      occupation: document.getElementById("edit-occupation").value,
      weapon: document.getElementById("edit-weapon").value,
      cartoon: document.getElementById("edit-cartoon").value
    };
    charactersAPI.updateOneRegister(edit);
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    const newChar = {
      id: "",
      name: document.getElementById("name").value,
      occupation: document.getElementById("occupation").value,
      weapon: document.getElementById("weapon").value,
      cartoon: document.getElementById("cartoon").value
    };

    charactersAPI.createOneRegister(newChar);
  };
});
