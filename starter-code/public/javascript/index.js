const charactersAPI = new APIHandler("http://localhost:8000");

$(document).ready(() => {
  document.getElementById("fetch-all").onclick = function() {
    charactersAPI.getFullList().then(result => {
      result.data.forEach(element => {
        const div = document.querySelector(".characters-container");
        var newElem = document.createElement("div");
        newElem.className= "character-info"
        newElem.innerHTML = `
        <div class="name">ID: ${element.id}</div>
        <div class="name">Character Name: ${element.name}</div>
        <div class="occupation">Character Occupation: ${
          element.occupation
        }</div>
        <div class="cartoon">Is a Cartoon?: ${element.cartoon}</div>
        <div class="weapon">Character Weapon: ${element.weapon}</div>
        `;
        div.appendChild(newElem);
      });
    });
  };

  document.getElementById("fetch-one").onclick = function() {
    charactersAPI.getOneRegister().then(result => {
      result.data;
      const div = document.querySelector(".characters-container");
      var newElem = document.createElement("div");
      newElem.className= "character-info"
      newElem.innerHTML = `
      <div class="name">ID: ${result.data.id}</div>
      <div class="name">Character Name: ${result.data.name} </div>
      <div class="occupation">Character Occupation: ${
        result.data.occupation
      }</div>
      <div class="cartoon">Is a Cartoon?: ${result.data.cartoon}</div>
      <div class="weapon">Character Weapon: ${result.data.weapon}</div>
        `;
      div.appendChild(newElem);
    });
  };

  document.getElementById("delete-one").onclick = function() {
    const id = document.getElementById("delete-char").value
    charactersAPI.deleteOneRegister(id)
      
  };

  document.getElementById("edit-character-form").onsubmit = function(e) {
    e.preventDefault()
    charactersAPI.updateOneRegister(e)
  };

  document.getElementById("new-character-form").onsubmit = function(e) {
    // tengo que obtener la data 
    // convertirla en un objeto
    e.preventDefault()
    const character = {
      name: e.target.name.value,
      occupation: e.target.occupation.value,
      weapon: e.target.weapon.value,
      cartoon: e.target.cartoon.value
    };
    charactersAPI.createOneRegister(character)
  };
});
