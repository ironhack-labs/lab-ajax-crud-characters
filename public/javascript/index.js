const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", function (event) {
    charactersAPI
      .getFullList()
      .then((response) => {
        const characters = response.data;
        const blank = document.querySelector(".characters-container");
        blank.innerHTML = "";
        characters.forEach((character) => {
          console.log(character);
          blank.innerHTML += `
            <div class="character-info">
                <div class="id">Id: <span>${character.id}</span></div>
                <div class="name">Character Name: <span>${character.name}</span></div>
                <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
                <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
                <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
            </div>
            `;
        });
      })
      .catch((err) => console.log(err));
  });

  document.getElementById("fetch-one").addEventListener("click", function (event) {});

  document.getElementById("delete-one").addEventListener("click", function (event) {});

  document.getElementById("edit-character-form").addEventListener("submit", function (event) {});

  document.getElementById("new-character-form").addEventListener("submit", function (event) {});
});
