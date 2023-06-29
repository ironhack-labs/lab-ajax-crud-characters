const charactersAPI = new APIHandler("http://localhost:8000/characters");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI.getFullList();
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      let fetchOne = document.getElementById("fetch-one-form");
      let fetchOneValue = fetchOne.value;

      charactersAPI.getOneRegister(fetchOneValue);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let form = document.getElementById("delete-form");
      let formValue = form.value;

      charactersAPI.deleteOneRegister(formValue);
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      console.log("EDITED");
      console.log(req.body);
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      console.log(req.body);
    });
});
