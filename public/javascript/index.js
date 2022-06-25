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
      let id = document.getElementById("chr_id").value;
      charactersAPI.getOneRegister(id);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      let id = document.getElementById("del_id").value;
      charactersAPI.deleteOneRegister(id);
    });

  document
    .getElementById("edit-data")
    .addEventListener("click", function (event) {
      let id = document.getElementById("edit_id").value;
      event.preventDefault();
      charactersAPI.updateOneRegister(id);
    });

  document
    .getElementById("send-data")
    .addEventListener("click", function (event) {
      charactersAPI.createOneRegister();
      //let formData = new FormData(event.target);
    });
});
