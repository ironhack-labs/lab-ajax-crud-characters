const charactersAPI = new APIHandler("http://localhost:3000");
const charactersDetails = document.querySelector(".characters-container");
const oneCharacter = document.getElementById("character-id");
const deleteOne = document.getElementById("character-id-delete");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      charactersAPI
        .getFullList()
        .then((response) => {
          console.log("response from the API", response);
          const data = response.data;
          console.log("the array of characters", data);

          charactersDetails.innerHTML = "";
          data.forEach((characters) => {
            charactersDetails.innerHTML += `<div class="characters-container">
            <div class="character-info">
            <div class="id">Id: <span>${characters.id}</span></div>
              <div class="name">Name: <span>${characters.name}</span></div>
              <div class="occupation">Occupation: <span>${characters.occupation}</span></div>
              <div class="cartoon">Is a Cartoon? <span>${characters.cartoon}</span></div>
              <div class="weapon">Weapon: <span>${characters.weapon}</span></div>
            </div>
          </div>`;
          });
        })
        .catch((error) => {
          console.log(`error while getting the list of characters`);
        });
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      try {
        charactersDetails.innerHTML = "";
        const responseApi = await charactersAPI.getOneRegister(oneCharacter.value);

        charactersDetails.innerHTML += `<div class="characters-container">
            <div class="character-info">
            <div class="id">Id: <span>${responseApi.id}</span></div>
              <div class="name">Name: <span>${responseApi.name}</span></div>
              <div class="occupation">Occupation: <span>${responseApi.occupation}</span></div>
              <div class="cartoon">Is a Cartoon? <span>${responseApi.cartoon}</span></div>
              <div class="weapon">Weapon: <span>${responseApi.weapon}</span></div>
            </div>
          </div>`;
      } catch (error) {
        console.log(error);
      }
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
