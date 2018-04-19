const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(data => {
      $("#characters-container").empty();
      data.forEach(e => {
        const newCharacterHtml = `
          <div class="character-info">
            <div class="+name">Character Name: ${e.name} </div>
            <div class="occupation">Character Occupation: ${e.occupation}</div>
            <div class="cartoon">Is a cartoon?: ${e.cartoon}</div>
            <div class="weapon">Character Weapon: ${e.weapon}</div>
          </div>
        </div>`;
        $("#characters-container").append(newCharacterHtml);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    let id = $("#character-id").val();
    console.log(id);
    charactersAPI.getOneRegister(id).then(data => {
      $("#characters-container").empty();
      const newCharacterHtml = `
      <div class="character-info">
        <div class="+name">Character Name: ${data.name} </div>
        <div class="occupation">Character Occupation: ${data.occupation}</div>
        <div class="cartoon">Is a cartoon?: ${data.cartoon}</div>
        <div class="weapon">Character Weapon: ${data.weapon}</div>
      </div>
    </div>`;
      $("#characters-container").append(newCharacterHtml);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    let id = $("#character-id-delete").val();
    charactersAPI.deleteOneRegister(id).then( () => {
      charactersAPI.getFullList()
    })

  };

  document.getElementById("edit-character-form").onsubmit = function() {};

  document.getElementById("new-character-form").onsubmit = function() {};
});
