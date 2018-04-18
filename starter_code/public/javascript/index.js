const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList()
    .then(data => {
      data.forEach(e => {
        const newCharacterHtml = `
          <div class="character-info">
            <div class="+name">Character Name: ${e.name} </div>
            <div class="occupation">Character Occupation: ${e.occupation}</div>
            <div class="weapon">Character Weapon: ${e.weapon}</div>
          </div>
        </div>`;
        document.getElementById(
          "characters-container"
        ).innerHTML += newCharacterHtml;
      });
    });
   
  };

  document.getElementById("fetch-one").onclick = function() {};

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
