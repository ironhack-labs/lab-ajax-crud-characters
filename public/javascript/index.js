const charactersAPI = new APIHandler("http://localhost:8000");
const btnFetchAll = document.getElementById("fetch-all");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      event.preventDefault();
      const characterContainer = document.getElementsByClassName(
        "characters-container"
      );
      charactersAPI
        .getFullList()
        .then((apiRes) => {
          //console.log(apiRes.data)
          characterContainer.innerHTML = "";

          apiRes.data.forEach((character) => {
            data = document.createElement(
              "div"
            ).innerHTML += `<div class="character-info">
    <div class="name">${character.name}</div>
    <div class="occupation">${character.occupation}</div>
    <div class="cartoon">Cartoon:${character.cartoon}</div>
    <div class="weapon">${character.weapon}</div>
    </div>`;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      charactersAPI.getOneRegister()
        .then((apiResForOne) => {
          //console.log(apiResForOne.data);

        })
        .catch(err => {
          console.log(err);
        })
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      charactersAPI.deleteOneRegister()
        .then((apiResDeleteOne) => {
          //console.log(apiResDeleteOne.data);

        })
        .catch(err => {
          console.log(err);
        })
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI.updateOneRegister()
        .then((apiResEditOne) => {
          //console.log(apiResEditOne.data);

        })
        .catch(err => {
          console.log(err);
        })
    });

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {
      charactersAPI.createOneRegister()
        .then((apiResCreateOne) => {
          //console.log(apiResCreateOne.data);

        })
        .catch(err => {
          console.log(err);
        })
    });
});
