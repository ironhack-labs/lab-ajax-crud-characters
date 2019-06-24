// import APIHandler from "./APIHandler.js";

const charactersAPI = new APIHandler("http://localhost:8000", "characters");

const inputName = document.getElementById("name");
const inputOccupation = document.getElementById("occupation");
const inputWeapon = document.getElementById("weapon");
const inputCartoon = document.getElementById("cartoon");

const editName = document.getElementById("edit_name");
const editOccupation = document.getElementById("edit_occupation");
const editWeapon = document.getElementById("edit_weapon");
const editCartoon = document.getElementById("edit_cartoon");
const editId = document.getElementById("edit_id");

document.getElementById("fetch-all").onclick = function() {
  charactersAPI
    .getFullList()
    .then(serverRes => console.log(serverRes))
    .catch(serverErr => console.error(serverErr));
};

document.getElementById("fetch-one").onclick = function() {
  const input = document.getElementById("character-id");
  charactersAPI
    .getOneRegister(input.value)
    .then(serverRes => console.log(serverRes))
    .catch(serverErr => console.error(serverErr));
};

document.getElementById("new-character-form").onsubmit = function(evt) {
  evt.preventDefault();
  // console.log(inputWeapon.value);
  const info = {
    name: inputName.value,
    occupation: inputOccupation.value,
    weapon: inputWeapon.value,
    cartoon: inputCartoon.value
  };
  console.log(info);
  charactersAPI
    .createOneRegister(info)
    .then(serverRes => console.log(serverRes))
    .catch(serverErr => console.error(serverErr));
};

document.getElementById("delete-one").onclick = function() {
  const deleteElement = document.getElementById("character-id-delete");
  charactersAPI
    .deleteOneRegister(deleteElement.value)
    .then(serverRes => console.log(serverRes))
    .catch(serverErr => console.error(serverErr));
};

document.getElementById("edit-character-form").onsubmit = function(evt) {
  evt.preventDefault();
  const editInfo = {
    eid: editId.value,
    ename: editName.value, //vu avec Guillaume
    eoccupation: editOccupation.value,
    eweapon: editWeapon.value,
    ecartoon: editCartoon.value
  };
  console.log(editInfo);
  charactersAPI
    .updateOneRegister(editInfo)
    .then(serverRes => console.log(serverRes))
    .catch(serverErr => console.error(serverErr));
};
