const charactersAPI = new APIHandler("http://localhost:8000");

const targetCharacter = document.querySelector(".characters-container");
function allCharac(characters) {
  targetCharacter.innerHTML = "";
  characters.forEach((elem) => {
    targetCharacter.innerHTML += `
  <div class="character-info">
  <div class="name">Character ID : ${elem.id}</div>
    <div class="name">Character Name : ${elem.name}</div>
    <div class="occupation">Character Occupation : ${elem.occupation}</div>
    <div class="cartoon">Is a Cartoon? : ${elem.cartoon ? "yes" : "no"}</div>
    <div class="weapon">Character Weapon : ${elem.weapon}</div>
  </div> `;
  });
}

function getCharatObj(id) {
  const form = document.getElementById(id);
  const newName = form.querySelector('[name ="name"]');
  const newOccupation = form.querySelector('[name ="occupation"]');
  const newWeapon = form.querySelector('[name ="weapon"]');
  const newCartoon = form.querySelector('[name ="cartoon"]');
  return {
    name: newName.value,
    occupation: newOccupation.value,
    weapon: newWeapon.value,
    carton: newCartoon.checked,
  };
}

function resetForm(id) {
  const form = document.getElementById(id);
  const inputs = form.querySelectorAll("[name]");
  inputs.forEach((input) =>
    Boolean((input.checked = false))
      ? (input.checked = false)
      : (input.vallue = "")
  );
}

window.addEventListener("load", () => {
  const fetchAllBtn = document.getElementById("fetch-all");
  fetchAllBtn.addEventListener("click", function (event) {
    charactersAPI
      .getFullList()
      .then((result) => allCharac(result.data))
      .catch((err) => console.error(err));
  });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const input = document.querySelector('[name="character-id"]');
      charactersAPI
        .getOneRegister(input.value)
        .then((result) => one([result.data]))
        .catch((err) => console.error(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const input = document.querySelector('[name="character-id-delete"]');
      charactersAPI
        .deleteOneRegister(input.value)
        .then((result) => console.log(result.data))
        .catch((err) => console.error(err));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.querySelector('[name="chr-id"]').value;
      const update = getCharatObj("edit-character-form");
      charactersAPI
        .updateOneRegister(update, id)
        .then(() => resetForm("edit-character-form"))
        .catch((err) => console.error(err));
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const newName = document.querySelector(
        '#new-character-form[name ="name"]'
      );
      const newOccupation = document.querySelector(
        '#new-character-form[name ="occupation"]'
      );
      const newWeapon = document.querySelector(
        '#new-character-form[name ="weapon"]'
      );
      const newCartoon = document.querySelector(
        '#new-character-form[name ="cartoon"]'
      );
      const newCharacter = {
        newName: newName.value,
        newOccupation: newOccupation.value,
        newWeapon: newWeapon.value,
        newCartoon: newCartoon.checked,
      };

      charactersAPI
        .createOneRegister(newCharacter)
        .then((result) => {
          newName.value = "";
          newOccupation.value = "";
          newWeapon.value = "";
          newCartoon = "";
        })
        .catch((err) => console.error(err));
    });
});
