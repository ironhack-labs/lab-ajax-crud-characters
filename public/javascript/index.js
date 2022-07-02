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
      let id = document.getElementsByName("character-id");
      charactersAPI.getOneRegister(id[0].value);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let id = document.getElementsByName("character-id-delete");
      charactersAPI.deleteOneRegister(id[0].value);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      let name = document.querySelector(
        '#new-character-form input[name="name]'
      ).value;
      let occupation = document.querySelector(
        '#new-character-form input[name="occupation]'
      ).value;
      let weapon = document.querySelector(
        '#new-character-form input[name="weapon]'
      ).value;
      let cartoon = document.querySelector(
        '#new-character-form input[name="occupation]'
      ).checked;
      let character = {
        occupation,
        name,
        weapon,
        cartoon,
      };
      charactersAPI.createOneRegister({ character });
    });
});
