const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(data => {
      document.getElementById("characters-container").innerHTML = "";
      data.forEach(e => {
        const newCharacterHtml = `
          <div class="character-info">
            <div class="+name">Character Name: ${e.name} </div>
            <div class="occupation">Character Occupation: ${e.occupation}</div>
            <div class="cartoon">Is a cartoon?: ${e.cartoon}</div>
            <div class="weapon">Character Weapon: ${e.weapon}</div>
          </div>
        </div>`;
        document.getElementById(
          "characters-container"
        ).innerHTML += newCharacterHtml;
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = document.getElementById("character-id").value;
    console.log(id);
    charactersAPI.getOneRegister(id).then(data => {
      const newCharacterHtml = `
      <div class="character-info">
        <div class="+name">Character Name: ${data.name} </div>
        <div class="occupation">Character Occupation: ${data.occupation}</div>
        <div class="cartoon">Is a cartoon?: ${data.cartoon}</div>
        <div class="weapon">Character Weapon: ${data.weapon}</div>
      </div>
    </div>`;
      document.getElementById(
        "characters-container"
      ).innerHTML += newCharacterHtml;
    });
  };

  document.getElementById("delete-one").onclick = function() {};

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
