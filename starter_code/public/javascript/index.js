const charactersAPI = new APIHandler("http://localhost:8000");

let showChar = char => {
  let elem = $("<div>").addClass("character-info");
  let id = $("<div>")
    .addClass("id")
    .text("Id: ");
  let spanId = $("<span>").text(`${char.data.id}`);
  elem.append(id);
  id.append(spanId);
  let name = $("<div>")
    .addClass("name")
    .text("Name: ");
  let spanName = $("<span>").text(`${char.data.name}`);
  elem.append(name);
  name.append(spanName);
  let occ = $("<div>")
    .addClass("occupation")
    .text("Occupation: ");
  let spanOcc = $("<span>").text(`${char.data.occupation}`);
  elem.append(occ);
  occ.append(spanOcc);
  let cartoon = $("<div>")
    .addClass("cartoon")
    .text("Is a Cartoon? ");
  let spanCartoon = $("<span>").text(`${char.data.cartoon}`);
  elem.append(cartoon);
  cartoon.append(spanCartoon);
  let weapon = $("<div>")
    .addClass("weapon")
    .text("Weapon: ");
  let spanWeapon = $("<span>").text(`${char.data.weapon}`);
  elem.append(weapon);
  weapon.append(spanWeapon);
  $(".characters-container").append(elem);
};

let emptyAll = () => {
  $(".characters-container").empty();
};

let printAll = () => {
  charactersAPI.getFullList().then(res => {
    emptyAll();
    res.forEach(elem => {
      charactersAPI.getOneRegister(elem.id).then(res => showChar(res));
    });
  });
};

$(document).ready(() => {
  emptyAll();
  document.getElementById("fetch-all").onclick = function() {
    emptyAll();
    printAll();
  };

  document.getElementById("fetch-one").onclick = function(e) {
    let idChar = $(e.target).prev()[0].value;
    charactersAPI.getOneRegister(idChar).then(res => {
      emptyAll();
      showChar(res);
    });
  };

  document.getElementById("delete-one").onclick = function(e) {
    e.preventDefault;
    const charDel = {
      id: document.getElementById("delete").value
    };
    charactersAPI.deleteOneRegister(charDel);
    $(".characters-container").empty();
    printAll();
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
    emptyAll();
    printAll();
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

    charactersAPI
      .createOneRegister(newChar)
      .then(res => {
        emptyAll();
        printAll();
        console.log("post success");
        console.log(res);
      })
      .catch(error => {
        console.log("Oh No! Error!");
        console.log(error);
      });
  };
});
