const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document.getElementById("fetch-all").addEventListener("click", function (event) {
    charactersAPI
      .getFullList()
      .then((response) => {
        const characters = response.data;
        const characterCard = document.querySelector(".characters-container");
        characterCard.innerHTML = "";
        characters.forEach((character) => {
          characterCard.innerHTML += `
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

  document.getElementById("fetch-one").addEventListener("click", function (event) {
    charactersAPI.getOneRegister(document.getElementsByName("character-id")[0].value).then((response) => {
      const character = response.data;
      document.querySelector(".characters-container").innerHTML = `
      <div class="character-info">
          <div class="id">Id: <span>${character.id}</span></div>
          <div class="name">Character Name: <span>${character.name}</span></div>
          <div class="occupation">Character Occupation: <span>${character.occupation}</span></div>
          <div class="cartoon">Is a Cartoon? <span>${character.cartoon}</span></div>
          <div class="weapon">Character Weapon: <span>${character.weapon}</span></div>
      </div>
      `;
    });
  });

  document.getElementById("delete-one").addEventListener("click", function (event) {
    charactersAPI
      .deleteOneRegister(document.getElementsByName("character-id-delete")[0].value)
      .then(() => {
        document.querySelector("#delete-one").style.backgroundColor = "green";
      })
      .catch((err) => {
        document.querySelector("#delete-one").style.backgroundColor = "red";
      });
  });

  document.getElementById("edit-character-form").addEventListener("submit", function (event) {
    const id = document.getElementsByName("chr-id")[0].value;
    const name = document.querySelector('#edit-character-form input[name="name"]').value;
    const occupation = document.querySelector('#edit-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#edit-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#edit-character-form input[name="cartoon"]').checked;
    const characterNewData = { id, name, occupation, weapon, cartoon };
    charactersAPI.updateOneRegister(id, characterNewData);
  });

  document.getElementById("new-character-form").addEventListener("submit", function (event) {
    const name = document.querySelector('#new-character-form input[name="name"]').value;
    const occupation = document.querySelector('#new-character-form input[name="occupation"]').value;
    const weapon = document.querySelector('#new-character-form input[name="weapon"]').value;
    const cartoon = document.querySelector('#new-character-form input[name="cartoon"]').checked;
    const characterData = { name, occupation, weapon, cartoon };
    charactersAPI.createOneRegister(characterData);
  });
});
