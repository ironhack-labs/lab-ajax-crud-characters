const charactersAPI = new APIHandler("http://localhost:8000");
console.log(charactersAPI);

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      try {
        const apiRes = await charactersAPI.getFullList();
        const container = document.querySelector(".characters-container");
        container.innerHTML = "";
        const arr = apiRes.data;
        console.log(arr);
        arr.forEach((character) => {
          container.innerHTML += `<div class="character-info">
          <div class="id">Id: ${character.id}</div>
          <div class="name">Name: ${character.name}</div>
          <div class="occupation">Occupation: ${character.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${character.cartoon}</div>
          <div class="weapon">Weapon: ${character.weapon}</div>`;
        });
        //console.log(apiRes.data);
      } catch (err) {
        console.error(err);
      }
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {});

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
