const charactersAPI = new APIHandler("http://localhost:8000");

console.log("charactersAPI");
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
      const id = document.getElementById("characterId").value;
      charactersAPI.getOneRegister(id);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      // const name = document.getElementById("nameCharacter").value;
      // const occupation = document.getElementById("occupationCharacter").value;
      // const weapon = document.getElementById("weaponCharacter").value;
      // const check = document.getElementById("checkCharacter").checked;

      for (const property in characters) {
        console.log(`${property}: ${characters[property]}`);
      }

      charactersAPI.createOneRegister();
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
