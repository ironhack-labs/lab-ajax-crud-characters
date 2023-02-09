const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", (event) => {
    charactersAPI
      .getFullList()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("fetch-one").addEventListener("click", (event) => {
    charactersAPI
      .getOneRegister()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("delete-one").addEventListener("click", (event) => {
    charactersAPI
      .deleteOneRegister()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("edit-character-form").addEventListener("submit", (event) => {
    charactersAPI
      .updateOneRegister()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });

  document.getElementById("new-character-form").addEventListener("submit", (event) => {
    charactersAPI
      .createOneRegister()
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });
});
