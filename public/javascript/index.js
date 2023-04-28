const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  // Add event listener to "Fetch all" button
  document.getElementById("fetch-all").addEventListener("click", async function (event) {
    // Get all characters
    const allCharacters = await charactersAPI.getFullList("characters");

    // Select character container
    const characterContainer = document.querySelector(".characters-container");

    // Make character container empty
    characterContainer.innerHTML = "";

    // Display the characters
    allCharacters.forEach((currentCharacter) => {
      const newDiv = document.createElement("div");
      newDiv.classList.add("character-info");
      newDiv.innerHTML = `
    <div class="name">Character Name: ${currentCharacter.name}</div>
    <div class="occupation">Character Species: ${currentCharacter.species}</div>
    <div class="cartoon">Is a Wizard?: ${currentCharacter.hogwartsStudent ? "Yes" : "No"}</div>
    <div class="weapon">Actor/Actress: ${currentCharacter.actor}</div>
  `;
      characterContainer.appendChild(newDiv);
      console.log("hey");
    });

    document.getElementById("fetch-one").addEventListener("click", function (event) {});

    document.getElementById("delete-one").addEventListener("click", function (event) {});

    document.getElementById("edit-character-form").addEventListener("submit", function (event) {});

    document.getElementById("new-character-form").addEventListener("submit", function (event) {});
  });
});
