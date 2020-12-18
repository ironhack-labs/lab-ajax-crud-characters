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
      charactersAPI.getOneRegister();
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      charactersAPI.deleteOneRegister();
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI.updateOneRegister();
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI.createOneRegister();
    });
});
