const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((allChar) => console.log(allChar))
        .catch((err) => console.log(err));
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const id = document.querySelector(".operation input").value;
      charactersAPI
        .getOneRegister(id)
        .then((char) => console.log(char))
        .catch((err) => console.log(err));
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      const btnDeleteOne = document.getElementById("delete-one");
      btnDeleteOne.addEventListener("click", function (event) {
        const id = document.querySelector("input[name = 'character-id-delete']")
          .value;
        charactersAPI
          .deleteOneRegister(id)
          .then(() => (btnDeleteOne.style.backgroundColor = "green"))
          .catch(() => (btnDeleteOne.style.backgroundColor = "red"));
      });

      document
        .getElementById("edit-character-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const id = document.querySelector(
            "#edit-character-form input[name='chr-id']"
          ).value;
          const name = document.querySelector(
            "#edit-character-form input[name='name']"
          ).value;
          const occupation = document.querySelector(
            "#edit-character-form input[name='occupation']"
          ).value;
          const weapon = document.querySelector(
            "#edit-character-form input[name='weapon']"
          ).value;
          const cartoon = document.querySelector(
            "#edit-character-form input[name='cartoon']"
          ).checked;
          const modifChar = { name, occupation, weapon, cartoon };
          charactersAPI.updateOneRegister(id, modifChar);
        });

      document
        .getElementById("new-character-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          const name = document.querySelector(
            "#new-character-form input[name='name']"
          ).value;
          const occupation = document.querySelector(
            "#new-character-form input[name='occupation']"
          ).value;
          const weapon = document.querySelector(
            "#new-character-form input[name='weapon']"
          ).value;
          const cartoon = document.querySelector(
            "#new-character-form input[name='cartoon']"
          ).checked;
          const newChar = { name, occupation, weapon, cartoon };
          charactersAPI.createOneRegister(newChar);
          document.getElementById("new-character-form").reset();
        });
    });
});
