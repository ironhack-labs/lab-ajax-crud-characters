const charactersAPI = new APIHandler("http://localhost:8000");
const charactersDetails = document.querySelector(".characters-container");

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
        .catch((error) =>
          console.log(`error while getting the list of characters:' ${err}`)
        );
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      charactersAPI.getOneRegister(id).then((oneCharacter) => {
        let id = document.getElementById("data-id").nodeValue;
        charactersAPI.getOneRegister(id).then((apiResponse) => {
          const data = apiResponse.data;
          let str = "";
          str += `<div class="characters-container">
            <div class="character-info">
            <div class="id">Id: <span>${data.id}</span></div>
              <div class="name">Name: <span>${data.name}</span></div>
              <div class="occupation">Occupation: <span>${data.occupation}</span></div>
              <div class="cartoon">Is a Cartoon? <span>${data.cartoon}</span></div>
              <div class="weapon">Weapon: <span>${data.weapon}</span></div>
            </div>
          </div>`;
          document.getElementById("characters-container").innerHTML= str;
        })
        .catch((error)=>
        console.log(error));
      });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {
      
    });

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
