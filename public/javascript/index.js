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
   * When "FETCH ONE" button clicked : Get the character with the ID specified
   */
  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI.getOneRegister();
    });

  /**
   * When "DELETE ONE" button clicked : Delete the character
   */
  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      event.preventDefault();
      charactersAPI.deleteOneRegister();
    });

  /**
   * Fetch the character information when the "Fetch character" is clicked
   */
  document
    .getElementById("fetch-data")
    .addEventListener("click", function (event) {
      charactersAPI.fetchCharacterInfo();
    });

  /**
   * When "Update " button clicked : Update the  character
   */
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      charactersAPI.updateOneRegister();
    });

  /**
   * When "CREATE ONE" button clicked : Create a new character
   */
  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      charactersAPI.createOneRegister();
    });
});
