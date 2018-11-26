const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    const idinput = document.querySelector("input[name=character-id]").value;
    container.innerHTML = "";
    if (idinput == "") {
      return (container.innerHTML = "<h1> ID input can't be empty</h1>");
    }
    charactersAPI.getOneRegister(idinput);
  };

  document.getElementById("delete-one").onclick = function() {
    const delinput = document.querySelector("input[name=character-id-delete]")
      .value;
    charactersAPI.deleteOneRegister(delinput);
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault();
    const char = {
      id: document.getElementById("chid").value,
      name: document.getElementById("chname").value,
      occupation: document.getElementById("choccupation").value,
      weapon: document.getElementById("chweapon").value,
      cartoon: document.getElementById("chcartoon").value
    };
    console.log(char);
    if (
      char.name == "" ||
      char.occupation == "" ||
      char.weapon == "" ||
      char.id == ""
    ) {
      return (container.innerHTML = "<h1>All fields must be filled</h1>");
    }

    charactersAPI.updateOneRegister(char);
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    e.preventDefault();
    const char = {
      name: document.getElementById("newname").value,
      occupation: document.getElementById("newoccupation").value,
      weapon: document.getElementById("newweapon").value,
      cartoon: document.getElementById("newcartoon").value
    };
    if (char.name == "" || char.occupation == "" || char.weapon == "") {
      return (container.innerHTML = "<h1>All fields must be filled</h1>");
    }
    charactersAPI.createOneRegister(char);
  };
});
