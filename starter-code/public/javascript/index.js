const charactersAPI = new APIHandler("http://localhost:8000");
window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function(event) {
      charactersAPI.getFullList().then(allChars => {
        let charContainerDOMEl = document.querySelector(
          ".characters-container"
        );
        let charsPayload = allChars.data;

        charContainerDOMEl.innerHTML = "";
        charsPayload.forEach(character => {
          charContainerDOMEl.innerHTML += `
            <div class="character-info">
              <div class="name">Name:${character.name}</div>
              <div class="occupation">Occupation: ${character.occupation}</div>
              <div class="cartoon">${character.cartoon ? "Is a Cartoon" : "Is Real"}</div>
              <div class="weapon">Weapon: ${character.weapon}</div>
            </div>
          `;
        });
      });
    });
  document
    .getElementById("fetch-one")
    .addEventListener("click", function(event) {
      let id = document.querySelector("input[name=character-id]").value;
      charactersAPI.getOneRegister(id).then(data => {
        document.querySelector(".name").innerHTML = data.data.name;
        document.querySelector(".occupation").innerHTML = data.data.occupation;
        document.querySelector(".cartoon").innerHTML = data.data.cartoon;
        document.querySelector(".weapon").innerHTML = data.data.weapon;
      });
    });
  document
    .getElementById("delete-one")
    .addEventListener("click", function(event) {});
  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function(event) {});
  document
    .getElementById("new-character-form")
    .addEventListener("submit", function(event) {});
});
