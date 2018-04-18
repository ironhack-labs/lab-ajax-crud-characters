$(document).ready(() => {
  const charactersAPI = new APIHandler("http://localhost:8000");
  document.getElementById("fetch-all").onclick = function() {
    let container = document.getElementById("characters");
    container.innerHTML = "";
    charactersAPI.getFullList().then(data => {
      data.forEach(e => {
        container.innerHTML += `<div class="character-info col-sm-4">
        <div class="name">Name: ${e.name}</div>
        <div class="occupation">Occupation: ${e.occupation}</div>
        <div class="cartoon">Cartoon: ${e.cartoon}</div>
        <div class="weapon">Weapon: ${e.weapon}</div>
      </div>`;
      });
    });
  };
});