const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterId = document.querySelector(
        'input[name="character-id"]'
      ).value;
      charactersAPI.getOneRegister(characterId);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const idInput = document.querySelector(
        'input[name="character-id-delete"]'
      );
      const characterId = idInput.value;
      charactersAPI
        .deleteOneRegister(characterId)
        .then(() => {
          console.log(`Character with ID ${characterId} has been deleted.`);
        })
        .catch((error) => {
          console.log(error);
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const idInput = document.querySelector('input[name="chr-id"]');
      const nameInput = document.querySelector('input[name="name"]');
      const occupationInput = document.querySelector(
        'input[name="occupation"]'
      );
      const weaponInput = document.querySelector('input[name="weapon"]');
      const cartoonInput = document.querySelector('input[name="cartoon"]');

      const characterId = idInput.value;

      const updatedCharacter = {
        name: nameInput.value,
        occupation: occupationInput.value,
        weapon: weaponInput.value,
        cartoon: cartoonInput.checked,
      };

      charactersAPI
        .updateOneRegister(characterId, updatedCharacter)
        .then(() => {
          console.log(`Character with ID ${characterId} has been updated.`);
        })
        .catch((error) => {
          console.log(error);
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      // event.preventDefault();

      // const nameInput = document.querySelector('input[name="name"]');
      // const occupationInput = document.querySelector(
      //   'input[name="occupation"]'
      // );
      // const weaponInput = document.querySelector('input[name="weapon"]');
      // const cartoonInput = document.querySelector('input[name="cartoon"]');

      // const characterData = {
      //   name: nameInput.value,
      //   occupation: occupationInput.value,
      //   weapon: weaponInput.value,
      //   cartoon: cartoonInput.checked,
      // };
      // charactersAPI.createOneRegister(characterData);
      event.preventDefault();

      const nameInput = document.querySelector('input[name="name"]');
      const occupationInput = document.querySelector(
        'input[name="occupation"]'
      );
      const weaponInput = document.querySelector('input[name="weapon"]');
      const cartoonInput = document.querySelector('input[name="cartoon"]');

      const newCharacter = {
        name: nameInput.value,
        occupation: occupationInput.value,
        weapon: weaponInput.value,
        cartoon: cartoonInput.checked,
      };

      charactersAPI
        .createOneRegister(newCharacter)
        .then(() => {
          console.log("New character has been created.");
        })
        .catch((error) => {
          console.log(error);
        });
    });
});
