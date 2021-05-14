const charactersAPI = new APIHandler("http://localhost:8000");
console.log("---start---");
console.log(charactersAPI);

const targetCharacters = document.querySelector(".characters-container");

function displayCharacters(characters) {
  // this one is supposed to loop through each character
  // and display the infos in html
  targetCharacters.innerHTML = "";
  characters.forEach((charac) => {
    targetCharacters.innerHTML += `<div class="character-info">
    <div class="name"> Name : ${charac.name}</div>
    <div class="occupation"> Occupation : ${charac.occupation}</div>
    <div class="cartoon"> Cartoon : ${charac.cartoon}</div>
    <div class="weapon"> Weapon : ${charac.weapon}</div>
  </div>`;
  });
  console.log("super", characters);
}

function getCharacterObject(id) {
  const form = document.getElementById(id);
  const name = form.querySelector('[name="name"]');
  const occupation = form.querySelector('[name="occupation"]');
  const weapon = form.querySelector('[name="weapon"]');
  const cartoon = document.querySelector('[name="cartoon"]');
  return {
    name: name.value,
    occupation: occupation.value,
    weapon: weapon.value,
    cartoon: cartoon.checked,
  };
}

function resetForm(id) {
  const form = document.getElementById(id);
  const inputs = form.querySelectorAll("[name]");
  inputs.forEach((input) =>
    Boolean(input.checked) ? (input.checked = false) : (input.value = "")
  );
}

window.addEventListener("load", () => {
  const buttonFetchAll = document.getElementById("fetch-all");

  buttonFetchAll.addEventListener("click", (event) => {
    /*const apiResult = await charactersAPI.getFullList();
      displayCharacters(apiResult.data);*/
    charactersAPI
      .getFullList()
      .then((apiResult) => displayCharacters(apiResult.data))
      .catch((apiErr) => console.error(apiErr));
  });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const input = document.querySelector('[name="character-id"]');
      charactersAPI
        .getOneRegister(input.value)
        .then((characterResult) => displayCharacters([characterResult.data]))
        .catch();
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const input = document.querySelector('[name="character-id-delete"]');
      charactersAPI
        .deleteOneRegister(input.value)
        .then((characterResult) => console.log(characterResult.data))
        .catch((apiError) => console.warn(apiError));
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const id = document.querySelector('[name="chr-id"]').value;
      const updatedCharacter = getCharacterObject("edit-character-form");
      charactersAPI
        .updateOneRegister(updatedCharacter, id)
        .then((characterResult) => resetForm("edit-character-form"))
        .catch((apiError) => console.warn(apiError));
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const newCharac = getCharacterObject("new-character-form");
      charactersAPI
        .createOneRegister(newCharac)
        .then((characterResult) => resetForm("new-character-form"))
        .catch((apiError) => console.warn(apiError));
    });
});
