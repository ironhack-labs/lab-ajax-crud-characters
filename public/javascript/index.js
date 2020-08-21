const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  /**
   * When "FETCH ALL" button clicked : Get all the charactrs information
   */

  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI.getFullList();
    });

  /**
   * When "FETCH ONE" button clicked : Get all the charactrs information
   */
  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI.getOneRegister();
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
