const charactersAPI = new APIHandler("http://localhost:8000");
const schema = $("#schema");
const characters = $(".characters-container");
$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    characters.html("");
    charactersAPI.getFullList().then(list => {
      list.forEach(element => {
        createElement(element);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    characters.html("");
    const id = $(".character-id").val();
    console.log(id);
    charactersAPI.getOneRegister(id).then(element => {
      createElement(element);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = $(".character-id-delete").val();
    characters.html("");
    charactersAPI.deleteOneRegister(id).then(element => {
      $("#fetch-all").trigger("click");
    });
  };

  document.getElementById("edit-character-form").onsubmit = function() {
    const form = $("#edit-character-form").serializeArray();
    const id = form[0].value
    const name = form[1].value;
    const occupation = form[2].value;
    const weapon = form[3].value;
    const cartoon = form[4].value;
    const obj = {
      id,
      name,
      occupation,
      weapon,
      cartoon
    };
    charactersAPI.updateOneRegister(id,obj).then(e => {
      $("#send-data-update").css({
        background:"green"
      })
    });
  };

  document.getElementById("new-character-form").onsubmit = function() {
    const form = $("#new-character-form").serializeArray();
    const name = form[0].value;
    const occupation = form[1].value;
    const weapon = form[2].value;
    const cartoon = form[3].value;
    const obj = {
      name,
      occupation,
      weapon,
      cartoon
    };
    charactersAPI.createOneRegister(obj).then(e => {
      $("#send-data").css({
        background:"green"
      })
    });
  };
});

function createElement(element) {
  let info = $("<div>").addClass("character-info");
  let name = $("<div>")
    .addClass("name")
    .text(element.name);
  let occupation = $("<div>")
    .addClass("occupation")
    .text(element.occupation);
  let cartoon = $("<div>")
    .addClass("cartoon")
    .text(element.cartoon);
  let weapon = $("<div>")
    .addClass("weapon")
    .text(element.weapon);
  info.append(name);
  info.append(occupation);
  info.append(cartoon);
  info.append(weapon);
  $(".characters-container").append(info);
}
