const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((apiResponse) => {
          console.log(apiResponse);
        })
        .catch((apiError) => {
          console.log(apiError);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.getElementById("fetch-one-input");
      const idInput = id.value;
      console.log(idInput);

      charactersAPI
        .getOneRegister(idInput)
        .then((apiResponse) => {
          console.log(apiResponse);
        })
        .catch((apiError) => {
          console.log(apiError);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const id = document.getElementById("delete-id-input");
      const idToDelete = id.value;
      console.log(idToDelete);

      charactersAPI
        .deleteOneRegister(idToDelete)
        .then((apiResponse) => {
          console.log(apiResponse);
        })
        .catch((apiError) => {
          console.log(apiError);
        });
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const idInput = document.getElementById("edit-id-input");
      const id = idInput.value;
      const nameInput = document.getElementById("edit-name-input");
      const name = nameInput.value;
      const occupationInput = document.getElementById("edit-occupation-input");
      const occupation = occupationInput.value;
      const weaponCheckbox = document.getElementById("edit-weapon-checkbox");
      const weapon = weaponCheckbox.checked;

      charactersAPI
        .updateOneRegister(id, { name, occupation, weapon })
        .then((apiResponse) => {
          console.log(apiResponse);
        })
        .catch((apiError) => {
          console.log(apiError);
        });
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const inputName = document.getElementById("input-name");
      const name = inputName.value;
      const inputOccupation = document.getElementById("input-occupation");
      const occupation = inputOccupation.value;
      const inputWeapon = document.getElementById("input-weapon");
      const weapon = inputOccupation.value;
      const checkboxIsCartoon = document.getElementById("checkbox-is-cartoon");
      const isCartoon = checkboxIsCartoon.checked;

      if (name === "" || occupation === "" || weapon === "" || isCartoon === "")
        return;

      const data = {
        name,
        occupation,
        weapon,
        isCartoon,
      };

      charactersAPI
        .createOneRegister(data)
        .then((apiResponse) => {
          console.log(apiResponse);
        })
        .catch((apiError) => {
          console.log(apiError);
        });
    });
});
