const charactersAPI = new APIHandler("http://localhost:8000");

const newForm = document.getElementById("new-character-form");
const editForm = document.getElementById("edit-character-form");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList();
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementById("find-by-id").value;
    console.log(id);
    console.log(charactersAPI.getOneRegister(id));
  };

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {
    let name = editForm.elements["name"].value;
    let occupation = editForm.elements["occupation"].value;
    let weapon = editForm.elements["weapon"].value;
    let cartoon = editForm.elements["cartoon"].checked;
    let id = editForm.elements["chr-id"].value;
    charactersAPI.updateOneRegister(id, { name, occupation, weapon, cartoon });
  };

  document.getElementById("new-character-form").onsubmit = function() {
    let name = newForm.elements["name"].value;
    let occupation = newForm.elements["occupation"].value;
    let weapon = newForm.elements["weapon"].value;
    let cartoon = newForm.elements["cartoon"].checked;
    charactersAPI.createOneRegister({ name, occupation, weapon, cartoon });
  };
});
