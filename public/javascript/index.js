const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', async function (event) {
    let allCharacters = await charactersAPI.getFullList("characters");
    const characterContainer = document.getElementsByClassName("characters-container")[0];
    characterContainer.innerHTML = "";
    
    allCharacters.forEach((element) => {
      characterContainer.innerHTML += `
        <div class="character-info">
          <div class="name">Character Name: ${element.name}</div>
          <div class="occupation">Character Occupation: ${element.occupation}</div>
          <div class="cartoon">Is a Cartoon?: ${element.cartoon}</div>
          <div class="weapon">Character Weapon: ${element.weapon}</div>
        </div>
      `;
    });
    console.log("Here is all characters ", allCharacters)

});

  document.getElementById('fetch-one').addEventListener('click', async function (event) {
    const idInput = document.querySelector("#characterId").value;
    const oneChar = await charactersAPI.getOneRegister("characters", idInput);
    console.log(response)
    });

  document.getElementById('delete-one').addEventListener('click', function (event) {

  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});
