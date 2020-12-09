const charactersAPI = new APIHandler("http://localhost:8000");
console.log(charactersAPI);

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.querySelector(".operations div:nth-child(2) input")
        .value;
      charactersAPI.getOneRegister(id);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const id = document.querySelector(".operations div:nth-child(3) input")
        .value;
      charactersAPI.deleteOneRegister(id);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      const editCharacter = document.querySelectorAll(
        "#edit-character-form input"
      );
      event.preventDefault();
      console.log(editCharacter);
      const id = editCharacter[0].value;
      const name = editCharacter[1].value;
      const occupation = editCharacter[2].value;
      const weapon = editCharacter[3].value;
      let isCartoon = false;
      if (editCharacter[4].checked) {
        isCartoon = true;
      }

      const editedCharacterInfo = {
        name,
        occupation,
        weapon,
        isCartoon,
      };

      charactersAPI.updateOneRegister(editedCharacterInfo, id);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      const createCharacter = document.querySelectorAll(
        "#new-character-form input"
      );
      event.preventDefault();
      console.log(createCharacter);
      const name = createCharacter[0].value;
      const occupation = createCharacter[1].value;
      const weapon = createCharacter[2].value;
      let isCartoon = false;
      if (createCharacter[3].checked) {
        isCartoon = true;
      }

      const newCharacterInfo = {
        name,
        occupation,
        weapon,
        isCartoon,
      };

      charactersAPI.createOneRegister(newCharacterInfo);
    });
});
