const APIHandler = require("./APIHandler");

const apiHandler = new APIHandler();

// Function to display character information
function displayCharacter(character) {
  const characterCard = document.createElement("div");
  characterCard.classList.add("character-card");

  const characterName = document.createElement("h3");
  characterName.textContent = character.name;

  const characterInfo = document.createElement("p");
  characterInfo.textContent = `Age: ${character.age}, Profession: ${character.profession}`;

  characterCard.appendChild(characterName);
  characterCard.appendChild(characterInfo);

  // Add the character card to the document
  document.getElementById("character-container").appendChild(characterCard);
}

// Event handler for fetching all characters
function fetchAllCharacters() {
  apiHandler.getAllCharacters();
}

// Event listener for the fetch all button
document
  .getElementById("fetch-all-button")
  .addEventListener("click", fetchAllCharacters);

// Event handler for displaying all characters
function displayAllCharacters(characters) {
  const characterContainer = document.getElementById("character-container");
  characterContainer.innerHTML = ""; // Clear previous characters

  characters.forEach((character) => {
    displayCharacter(character);
  });
}
