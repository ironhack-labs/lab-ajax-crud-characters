const charactersAPI = new APIHandler("http://ih-crud-api.herokuapp.com");

$(document).ready(() => {
  $("#fetch-all").on("click", e => {
    getFullList();
    {
    }
  });

  $("#fetch-one").on("click", e => {
    getOneRegister();
  });

  $("#delete-one").on("click", e => {
    deleteOneRegister();
  });

  $("#edit-character-form").on("submit", e => {
    updateOneRegister();
  });

  $("#new-character-form").on("submit", e => {
    createOneRegister();
  });
});
